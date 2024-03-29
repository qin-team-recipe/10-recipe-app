"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { generateUploadImagePath } from "@/lib/generateUploadImagePath";
import { getAuthDataForClient } from "@/lib/getAuthData/getAuthDataForClient";
import { UpdateUserPostSchema, UpdateUserPostSchemaType } from "@/types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button";
import { InputImage, InputMultipleText, InputText } from "@/components/Form";
import { Header } from "@/components/Header/Header";
import { Chef } from "@/app/api/chef/[id]/route";

type PreUpdateUserPostSchemaType = Omit<UpdateUserPostSchemaType, "image_url" | "link"> & {
  image: FileList;
  links: { value: string }[];
};

const PreUpdateUserPostSchema = UpdateUserPostSchema.omit({ image_url: true, link: true }).extend({
  image: z.custom<FileList>().optional(),
  links: z.object({ value: z.optional(z.string()) }).array(),
});

const LinkSchema = z.nullable(z.string().url({ message: "URLの形式が正しくありません" }));

const AccountPage = () => {
  const [user, setUser] = useState<Chef>();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({ link: "", submit: "" });
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    control,
  } = useForm<PreUpdateUserPostSchemaType>({
    resolver: zodResolver(PreUpdateUserPostSchema),
    defaultValues: { ...user, links: [{ value: "" }] },
  });

  useEffect(() => {
    const getUser = async () => {
      const { userData } = await getAuthDataForClient();
      if (!userData?.name) {
        router.push("/");
      }
      setUser(userData);
      setIsLoading(false);
    };
    getUser();
  }, [router]);

  // RHFでは動的にDefaultValuesを変更することができないため一度resetする
  useEffect(() => {
    reset(user);
  }, [user, reset]);

  /** マイページに遷移させる */
  const transitionToMyPage = useCallback(() => router.push(`/chef/${user?.id}`), [router, user?.id]);

  const onSubmit: SubmitHandler<PreUpdateUserPostSchemaType> = async (data) => {
    if (!user) return;
    try {
      // linkのバリデーション（submit時のzodバリデーションではうまくいかなかったのでこちらで対応）
      data.links.forEach((link) => (link.value ? LinkSchema.parse(link.value) : null));

      // postするためにデータを整形
      const link = data.links.map((link) => link.value).filter(Boolean);
      const { imagePath, imageUploadErrorFlg } = await generateUploadImagePath(data.image[0]);

      if (imageUploadErrorFlg) {
        setErrorMessage({
          link: "",
          submit: "画像のアップロードに失敗しました。時間を置いて再度試していただくか、管理者にお問い合わせください。",
        });
        return;
      }

      const postData: UpdateUserPostSchemaType = {
        id: user.id,
        name: data.name,
        description: data.description,
        link,
        image_url: imagePath,
      };

      // ユーザーアップデート
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/`, {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          transitionToMyPage();
        } else {
          setErrorMessage({
            link: "",
            submit: "登録できませんでした。時間を置いて再度試していただくか、管理者にお問い合わせください。",
          });
        }
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        const errorMessage = e.errors[0].message;
        setErrorMessage({ link: errorMessage, submit: "" });
      } else {
        setErrorMessage({
          link: "",
          submit: "登録できませんでした。時間を置いて再度試していただくか、管理者にお問い合わせください。",
        });
      }
    }
  };

  return (
    <div>
      <Header title="編集" position="center" />
      {isLoading ? (
        // TODO: loadingコンポーネントを作成
        <p>loading...</p>
      ) : (
        // TODO: Formタグで実装すると、エンターキーでsubmitされてしまうので、後ほど対応
        <div className="space-y-4 py-4">
          <InputText
            label="ニックネーム"
            register={register("name")}
            placeholder="ニックネームをご入力ください"
            errorText={errors["name"]?.message}
          />
          <InputImage
            label="プロフィール画像（任意）"
            name="image"
            register={register}
            addClassNamesImage="ml-4"
            defaultValue={user?.image_url}
          />
          <InputText
            label="自己紹介（任意）"
            register={register("description")}
            errorText={errors["description"]?.message}
            isTextArea
          />
          <InputMultipleText
            label="関連リンク（任意）"
            name="links"
            placeholder="URLを入力してください"
            register={register}
            control={control}
            errorText={errorMessage.link}
            addText="リンクを追加する"
          />
          <div className="flex justify-between gap-x-4 px-4">
            <Button buttonColor="tomato" addClassNames="w-full" onClick={handleSubmit(onSubmit)}>
              保存する
            </Button>
            <Button onClick={transitionToMyPage} buttonColor="white" addClassNames="w-full">
              キャンセル
            </Button>
          </div>
          {errorMessage.submit && <p className="text-red">{errorMessage.submit}</p>}
        </div>
      )}
    </div>
  );
};

export default AccountPage;
