import Link from "next/link";

import { Button } from "@/components/button";
import { Icon } from "@/components/icon/Icon";
import { AddButton } from "@/app/recipe/new/_components/AddButton";

const Page = () => {
  const titleClass = "mb-1 ml-4 font-bold text-black";
  return (
    <div>
      <header className="flex items-center justify-between border-b border-lightGray px-3 py-4">
        <Icon type="CloseButton" />
        <div className="flex items-center gap-4 font-bold">
          <Link href="/" className="text-gray">
            下書き一覧
          </Link>
        </div>
      </header>
      <div className="mb-12 mt-5 flex flex-col gap-8">
        <div>
          <h3 className={titleClass}>レシピ名</h3>
          <input
            className="w-full border-y border-lightGray py-3 pl-5 outline-none placeholder:text-lightGray"
            type="text"
            placeholder="例：肉じゃが"
          />
        </div>
        <div>
          <div className="flex items-center gap-4">
            <h3 className={titleClass}>材料 / 2人前</h3>
            <div className="flex gap-1.5">
              <Icon type="Minus" size="small" color="tomato" backgrondColor="lightTomato" />
              <Icon type="Plus" size="small" color="tomato" backgrondColor="lightTomato" />
            </div>
          </div>
          <input className="w-full border-y border-lightGray py-3 pl-5 outline-none" type="text" />
          <AddButton title="材料を追加する" />
        </div>
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
        <div>
          <h3 className={titleClass}>画像（任意）</h3>
          <div className="ml-4 flex h-24 w-24 flex-col items-center justify-center rounded-md border border-lightGray">
            <p className="text-small text-gray">画像を設定</p>
            <Icon type="Plus" color="gray" size="small" />
          </div>
        </div>
        <div>
          <h3 className={titleClass}>レシピの紹介文（任意）</h3>
          <textarea className="w-full border-y border-lightGray py-3 pl-5 outline-none" />
        </div>
        <div>
          <h3 className={titleClass}>リンク（任意）</h3>
          <input className="w-full border-y border-lightGray py-3 pl-5 outline-none" type="text" />
          <AddButton title="リンクを追加する" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button color="tomato">保存する</Button>
          <Button color="tomato">削除する</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
