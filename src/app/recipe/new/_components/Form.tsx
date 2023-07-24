"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Icon } from "@/components/icon/Icon";
import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { MultipleInput } from "@/app/recipe/new/_components/MultipleInput";
import { SingleInput } from "@/app/recipe/new/_components/SingleInput";
import { action } from "@/app/recipe/new/action";
import { newRecipeSchema, NewRecipeSchemaType } from "@/app/recipe/new/type";

export const Form = () => {
  const useFormMethods = useForm<NewRecipeSchemaType>({
    defaultValues: {
      ingredients: [{ title: "" }],
      link: [{ title: "" }],
    },
    resolver: zodResolver(newRecipeSchema),
  });

  const { handleSubmit } = useFormMethods;

  const onSubmit = (data: NewRecipeSchemaType) => action(data);

  const titleClass = "mb-1 ml-4 font-bold text-black";
  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-12 mt-5 flex flex-col gap-8">
        <SingleInput label="レシピ名" placeholder="例：肉じゃが" schema="name" />
        <MultipleInput label="材料 / 2人前" schema="ingredients" buttonTitle="材料を追加する" />
        {/* TODO WYSIWYGエディタ */}
        <div>
          <h3 className={titleClass}>作り方</h3>
          <div className="flex w-full items-center gap-2 border-y border-lightGray py-3 pl-5 outline-none">
            <div className="h-5 w-5 shrink-0 rounded-full bg-tomato text-center leading-5">
              <span className=" text-medium text-white">1</span>
            </div>
            <p className="text-lightGray">工程をご記入ください</p>
          </div>
          <AddButton title="工程を追加する" />
        </div>
        {/* TODO 画像の登録 */}
        <div>
          <h3 className={titleClass}>画像（任意）</h3>
          <div className="ml-4 flex h-24 w-24 flex-col items-center justify-center rounded-md border border-lightGray">
            <p className="text-small text-gray">画像を設定</p>
            <Icon type="Plus" color="gray" size="small" />
          </div>
        </div>
        {/* textareaにしたい */}
        <SingleInput label="レシピの紹介文（任意）" schema="description" />
        <MultipleInput label="リンク任意" schema="link" buttonTitle="リンクを追加" />

        <input type="submit" className="border border-lightGray p-3 hover:cursor-pointer" value="保存する" />
      </form>
    </FormProvider>
  );
};
