"use client";

import { Icon } from "@/components/Icon/Icon";
import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { MultipleInput } from "@/app/recipe/new/_components/MultipleInput";

export const Form = () => {
  const titleClass = "mb-1 ml-4 font-bold text-black";
  return (
    <form className="mb-12 mt-5 flex flex-col gap-8">
      <div>
        <label className="mb-1 ml-4 font-bold text-black">レシピ名</label>
        <input
          className="w-full border-y border-lightGray px-4 py-2 outline-none placeholder:text-lightGray"
          type="text"
          placeholder="例：肉じゃが"
        />
      </div>
      <MultipleInput label="材料 / 2人前" buttonTitle="材料を追加する" />
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
      <div>
        <h3 className={titleClass}>画像（任意）</h3>
        <label className="ml-4 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-md border border-lightGray">
          <p className="text-small text-gray">画像を設定</p>
          <Icon type="Plus" color="lightGray" size="small" />
          <input className="hidden" type="file" />
        </label>
      </div>
      <div>
        <label className="mb-1 ml-4 font-bold text-black">レシピの紹介文（任意）</label>
        <textarea className="h-20 w-full border-y border-lightGray px-4 py-3 outline-none placeholder:text-lightGray" />
      </div>
      <MultipleInput label="リンク任意" buttonTitle="リンクを追加" />
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
  );
};
