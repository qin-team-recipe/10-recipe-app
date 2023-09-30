"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { generateUploadImagePath } from "@/lib/generateUploadImagePath";
import { CreateRecipeSchema, CreateRecipeSchemaType } from "@/types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import cc from "classcat";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button";
import { InputImage, InputMultipleText, InputText } from "@/components/Form";
import { Icon } from "@/components/Icon/Icon";
import { RecipeItem, UpdateRecipePostParams } from "@/app/api/recipe/[id]/route";
import { CreateRecipePostParams } from "@/app/api/recipe/route";

type FormProps = {
  userId: string;
};

type PreCreateRecipeSchemaType = Omit<
  CreateRecipeSchemaType,
  "image_url" | "instructions" | "ingredient" | "link" | "user_id" | "quantity"
> & {
  image: FileList;
  instructions: { value: string }[];
  ingredient: { value: string }[];
  link: { value: string }[];
};

type ErrorMessageType = {
  ingredient?: string;
  instructions?: string;
  link?: string;
  submit?: string;
};

const MIN_QUANTITY_NUM = 1;

const PreCreateRecipeSchema = CreateRecipeSchema.omit({
  image_url: true,
  ingredient: true,
  instructions: true,
  link: true,
  user_id: true,
  quantity: true,
}).extend({
  image: z.custom<FileList>().optional(),
  ingredient: z.object({ value: z.optional(z.string()) }).array(),
  instructions: z.object({ value: z.optional(z.string()) }).array(),
  link: z.object({ value: z.optional(z.string()) }).array(),
});

const LinkSchema = z.nullable(z.string().url({ message: "URLの形式が正しくありません" }));
const IngredientSchema = z.string().max(50, { message: "材料名は50文字以内で入力してください" });

export const RecipeForm: React.FC<FormProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const recipeId = searchParams.get("id");

  const [recipe, setRecipe] = useState<RecipeItem>();
  const [quantityNum, setQuantityNum] = useState(recipe?.Ingredients[0].quantity ?? 2);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>();
  const router = useRouter();

  const defaultValues = useMemo(
    () =>
      recipe
        ? {
            title: recipe.title,
            description: recipe.description || undefined,
            instructions: recipe.instructions.length
              ? recipe.instructions.map((instruction) => ({ value: instruction }))
              : [{ value: "" }],
            ingredient: recipe.Ingredients[0].ingredient.length
              ? recipe.Ingredients[0].ingredient.map((ingredient) => ({ value: ingredient.name }))
              : [{ value: "" }],
            link: recipe.Link.length ? recipe.Link.map((link) => ({ value: link.url })) : [{ value: "" }],
          }
        : {
            ingredient: [{ value: "" }],
            instructions: [{ value: "" }],
            link: [{ value: "" }],
          },
    [recipe]
  );

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    control,
  } = useForm<PreCreateRecipeSchemaType>({
    resolver: zodResolver(PreCreateRecipeSchema),
    defaultValues,
  });

  useEffect(() => {
    if (!recipeId) return;
    const fetchRecipe = async () => {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/${recipeId}`, { cache: "no-store" });
      const recipeData = await res.json();
      setRecipe(recipeData);
      setIsLoading(false);
    };
    fetchRecipe();
  }, [recipeId]);

  // RHFでは動的にDefaultValuesを変更することができないため一度resetする
  useEffect(() => {
    if (recipe) {
      reset(defaultValues);
    }
  }, [defaultValues, reset, recipe]);

  const postRecipe = async (postData: CreateRecipePostParams | UpdateRecipePostParams, recipeId?: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe${recipeId ? `/${recipeId}` : "/"}`, {
      method: recipeId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    }).then((res) => {
      if (res.status === 200) {
        router.push(`/chef/${props.userId}`);
      } else {
        setErrorMessage({ submit: "レシピの作成に失敗しました。管理者にお問い合わせください。" });
      }
    });
  };

  const onSubmit: SubmitHandler<PreCreateRecipeSchemaType> = async (data) => {
    try {
      // link,ingredientのバリデーション（submit時のzodバリデーションではうまくいかなかったのでこちらで対応）
      data.link.forEach((link) => (link.value ? LinkSchema.parse(link.value) : null));
      data.ingredient.forEach((ingredient) => (ingredient.value ? IngredientSchema.parse(ingredient.value) : null));
      // postするためにデータを整形
      const link = data.link.map((link) => link.value).filter(Boolean);
      const ingredient = data.ingredient.map((ingredient) => ingredient.value).filter(Boolean);
      const instructions = data.instructions.map((instructions) => instructions.value).filter(Boolean);
      const { imagePath, imageUploadErrorFlg } = await generateUploadImagePath(data.image[0]);
      if (imageUploadErrorFlg) {
        setErrorMessage({
          submit: "画像のアップロードに失敗しました。時間を置いて再度試していただくか、管理者にお問い合わせください。",
        });
        return;
      }

      // レシピ作成、更新
      if (recipe) {
        const updateData: UpdateRecipePostParams = {
          title: data.title,
          description: data.description || null,
          image_url: imagePath || recipe.image_url,
          user_id: props.userId,
          quantity: quantityNum,
          ingredient,
          instructions,
          link,
        };
        await postRecipe(updateData, recipe.id);
      } else {
        const createData: CreateRecipePostParams = {
          title: data.title,
          description: data.description || null,
          image_url: imagePath || null,
          user_id: props.userId,
          quantity: quantityNum,
          ingredient,
          instructions,
          link,
        };
        await postRecipe(createData);
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        const errorMessage = e.errors[0].message;
        e.errors[0].message.startsWith("材料名")
          ? setErrorMessage({ ingredient: errorMessage })
          : setErrorMessage({ link: errorMessage });
      } else {
        setErrorMessage({
          submit: "登録できませんでした。時間を置いて再度試していただくか、管理者にお問い合わせください。",
        });
      }
    }
  };

  const onDelete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/${recipeId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        router.push(`/chef/${props.userId}`);
      } else {
        setErrorMessage({ submit: "レシピの削除に失敗しました。管理者にお問い合わせください。" });
      }
    });
  };

  const isDisabledButton = MIN_QUANTITY_NUM >= quantityNum;
  const quantityActionButtonClass = "flex h-4 w-4 items-center justify-center bg-tomato/10";
  const decrementButtonClass = cc([quantityActionButtonClass, { "opacity-10": isDisabledButton }]);
  const decrement = useCallback(() => setQuantityNum((prev) => prev - 1), []);
  const increment = useCallback(() => setQuantityNum((prev) => prev + 1), []);

  return isLoading ? (
    // TODO: loadingコンポーネントを作成
    <p>loading...</p>
  ) : (
    // TODO: Formタグで実装すると、エンターキーでsubmitされてしまうので、後ほど対応
    <div className="space-y-4 py-4">
      <InputText
        label="レシピ名"
        register={register("title")}
        placeholder="レシピ名を入力"
        errorText={errors["title"]?.message}
      />
      <InputMultipleText
        label={`材料 / ${quantityNum}人前`}
        labelAfterElement={
          <div className="ml-2 mt-1 flex gap-1">
            <button className={decrementButtonClass} disabled={isDisabledButton} onClick={decrement}>
              <Icon type="Minus" size="small" color="tomato" />
            </button>
            <button className={quantityActionButtonClass} onClick={increment}>
              <Icon type="Plus" size="small" color="tomato" />
            </button>
          </div>
        }
        name="ingredient"
        placeholder="材料名を入力"
        register={register}
        control={control}
        errorText={errorMessage?.ingredient}
        addText="材料を追加する"
      />
      <InputMultipleText
        label="作り方"
        name="instructions"
        placeholder="工程を入力"
        register={register}
        control={control}
        errorText={errorMessage?.instructions}
        addText="工程を追加する"
        isShowIncrementIndex
      />
      <InputImage
        label="画像（任意）"
        name="image"
        register={register}
        addClassNamesImage="ml-4"
        defaultValue={recipe?.image_url || undefined}
      />
      <InputText
        label="レシピの紹介文（任意）"
        register={register("description")}
        isTextArea
        errorText={errors["description"]?.message}
      />
      <InputMultipleText
        label="リンク（任意）"
        name="link"
        placeholder="URLを入力"
        register={register}
        control={control}
        errorText={errorMessage?.link}
        addText="リンクを追加する"
      />
      <div className="flex justify-between gap-x-4 px-4">
        <Button buttonColor="tomato" addClassNames="w-full" onClick={handleSubmit(onSubmit)}>
          保存する
        </Button>
        {recipe && (
          <Button onClick={onDelete} buttonColor="white" addClassNames="w-full">
            削除する
          </Button>
        )}
      </div>
      {errorMessage?.submit && <p className="text-red">{errorMessage.submit}</p>}
    </div>
  );
};
