"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { ImageInput } from "@/app/recipe/new/_components/ImageInput";
import { MultipleInput } from "@/app/recipe/new/_components/MultipleInput";
import { newRecipeSchema, NewRecipeSchemaType } from "@/app/recipe/new/type";

export const Form = () => {
  const [imageData, setImageData] = useState("");

  const useFormMethods = useForm<NewRecipeSchemaType>({
    defaultValues: {
      ingredients: [{ title: "" }],
      link: [{ title: "" }],
    },
    resolver: zodResolver(newRecipeSchema),
  });

  const { handleSubmit, register, reset } = useFormMethods;

  const onSubmit = () => {
    reset();
    setImageData("");
  };

  const titleClass = "mb-1 ml-4 font-bold text-black";
  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-12 mt-5 flex flex-col gap-8">
        <div>
          <label className="mb-1 ml-4 font-bold text-black">レシピ名</label>
          <input
            className="w-full border-y border-lightGray px-4 py-2 outline-none placeholder:text-lightGray"
            type="text"
            placeholder="例：肉じゃが"
            {...register("name")}
          />
        </div>
        <MultipleInput label="材料 / 2人前" buttonTitle="材料を追加する" schema="ingredients" />
        {/* TODO WYSIWYGエディタ */}
        <div>
          <h3 className={titleClass}>作り方</h3>
          <div className="flex w-full items-center gap-2 border-y border-lightGray bg-white py-3 pl-5 outline-none">
            <div className="h-5 w-5 shrink-0 rounded-full bg-tomato text-center leading-5">
              <span className=" text-medium text-white">1</span>
            </div>
            <p className="text-lightGray">工程をご記入ください</p>
          </div>
          <AddButton title="工程を追加する" />
        </div>
        <ImageInput imageData={imageData} setImageData={setImageData} />
        <div>
          <label className="mb-1 ml-4 font-bold text-black">レシピの紹介文（任意）</label>
          <textarea
            className="h-20 w-full border-y border-lightGray px-4 py-3 outline-none placeholder:text-lightGray"
            {...register("description")}
          />
        </div>
        <MultipleInput label="リンク任意" buttonTitle="リンクを追加" schema="link" />
        <div className="flex gap-4 px-4">
          <input
            type="submit"
            className="w-full rounded bg-tomato  p-2 text-white hover:cursor-pointer"
            value="保存する"
          />
          <input
            type="submit"
            className="w-full rounded border border-lightTomato bg-white p-2 text-tomato hover:cursor-pointer"
            value="削除する"
          />
        </div>
      </form>
    </FormProvider>
  );
};
