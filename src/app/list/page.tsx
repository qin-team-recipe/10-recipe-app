import { NextPage } from "next";
import Image from "next/image";

import { MockMyList, MockRecipeList } from "@/mock";

import { Icon } from "@/components/icon/Icon";

const Page: NextPage = () => {
  const isLogin = true;

  return (
    <>
      <p className="w-full border-b border-lightGray p-2 text-center font-bold">買い物リスト</p>
      {isLogin ? (
        <div>
          <div className="mt-3 flex justify-between border-b border-solid border-lightGray px-4 py-3">
            <p className="text-large font-bold">じぶんメモ</p>
            <p className="flex w-16 cursor-pointer justify-between text-large">
              <Icon type="Plus" />
              <Icon type="DotsCircleHorizontal" addClassNames="rotate-90" />
            </p>
          </div>
          <div>
            {MockMyList.map((item) => {
              return (
                <div key={item.id} className="flex justify-between border-b border-solid border-lightGray px-3 py-2">
                  <div className="flex">
                    <button className="p-1">
                      {item.is_checked ? (
                        <Icon type="CircleCheck" color="white" fillColor="lightGray" />
                      ) : (
                        <Icon type="Circle" color="tomato" />
                      )}
                    </button>
                    <p className={item.is_checked ? "p-1 text-lightGray" : "p-1"}>{item.name}</p>
                  </div>
                  <div className="cursor-pointer p-1">
                    <Icon type="DotsVertical" />
                  </div>
                </div>
              );
            })}{" "}
          </div>
          <div className="mt-3 flex justify-between border-b border-solid border-lightGray px-4 py-3">
            <p className="text-large font-bold">グラタン</p>
            <p className="flex w-16 cursor-pointer justify-between text-large">
              <Icon type="Plus" />
              <Icon type="DotsCircleHorizontal" addClassNames="rotate-90" />
            </p>
          </div>
          <div>
            {MockRecipeList.map((item) => {
              return (
                <div key={item.id} className="flex justify-between border-b border-solid border-lightGray px-3 py-2">
                  <div className="flex">
                    <button className="p-1">
                      {item.is_checked ? (
                        <Icon type="CircleCheck" color="white" fillColor="lightGray" />
                      ) : (
                        <Icon type="Circle" color="tomato" />
                      )}
                    </button>
                    <p className={item.is_checked ? "p-1 text-lightGray" : "p-1"}>{item.name}</p>
                  </div>
                  <div className="cursor-pointer p-1">
                    <Icon type="DotsVertical" />
                  </div>
                </div>
              );
            })}{" "}
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
