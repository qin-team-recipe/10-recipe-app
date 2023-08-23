import { NextPage } from "next";
import Image from "next/image";

import { MockMyList, MockRecipeList } from "@/mock";

import { ListShoppingHeader } from "@/components/list/ListShoppingHeader";
import { ListShoppingItem } from "@/components/list/ListShoppingItem";

const Page: NextPage = () => {
  const isLogin = true;

  return (
    <>
      <p className="w-full border-b border-lightGray p-2 text-center font-bold">買い物リスト</p>
      {isLogin ? (
        <div>
          <div>
            <ListShoppingHeader title="じぶんメモ" />
            <div>
              {MockMyList.map((item) => (
                <ListShoppingItem key={item.id} id={item.id} name={item.name} is_checked={item.is_checked} />
              ))}
            </div>
          </div>
          <div>
            <ListShoppingHeader title="長いレシピ名長いレシピ名長いレシピ名長いレシピ名長いレシピ名長いレシピ名" />
            <div>
              {MockRecipeList.map((item) => (
                <ListShoppingItem key={item.id} id={item.id} name={item.name} is_checked={item.is_checked} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image className="w-64" src="/images/sample_list.png" width="256" height="256" alt="" />
          <p className="py-2 text-center font-bold">ログインをお願いします</p>
          <p className="text-center text-medium">こちらの機能を利用するにはログインが必要です</p>
          <div className="flex w-96 justify-between py-4">
            <button className="w-44 rounded-xl  bg-blue p-2.5 font-bold text-white hover:opacity-80">
              Google ログイン
            </button>
            <button className="w-44 rounded-xl  bg-black p-2.5 font-bold text-white hover:opacity-80">
              Apple ログイン
            </button>
          </div>
          <p className="text-center text-small">↑ cookiesを使ってログインっぽい挙動にしてます ↑</p>
        </div>
      )}
    </>
  );
};

export default Page;
