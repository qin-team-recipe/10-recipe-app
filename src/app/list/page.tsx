import { NextPage } from "next";
import Image from "next/image";

import { Icon } from "@/components/icon/Icon";

const Page: NextPage = () => {
  const isLogin = true;

  const recipe = [
    {
      id: 0,
      title: "じぶんメモ",
    },
    {
      id: 1,
      title: "グラタン",
    },
  ];

  const shopping_list = [
    {
      id: 0,
      created_at: "2023-06-20",
      recipe_id: 0,
      step: 0,
      updated_at: "2023-06-20",
      user_id: 0,
    },
    {
      id: 1,
      created_at: "2023-06-20",
      recipe_id: 1,
      step: 1,
      updated_at: "2023-06-20",
      user_id: 0,
    },
  ];

  const shopping_item = [
    {
      id: 0,
      created_at: "2023-06-20",
      ingredient_id: 0,
      isChecked: false,
      shopping_list_id: 0,
      updated_at: "2023-06-20",
    },
    {
      id: 1,
      created_at: "2023-06-20",
      ingredient_id: 1,
      isChecked: false,
      shopping_list_id: 0,
      updated_at: "2023-06-20",
    },
    {
      id: 2,
      created_at: "2023-06-20",
      ingredient_id: 2,
      isChecked: false,
      shopping_list_id: 1,
      updated_at: "2023-06-20",
    },
    {
      id: 3,
      created_at: "2023-06-20",
      ingredient_id: 3,
      isChecked: false,
      shopping_list_id: 1,
      updated_at: "2023-06-20",
    },
  ];

  const ingredient = [
    {
      id: 0,
      name: "キャベツ",
      created_at: "2023-06-20",
      quantity: 1,
      recipe_id: 0,
      updated_at: "2023-06-20",
    },
    {
      id: 1,
      name: "複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる",
      created_at: "2023-06-20",
      quantity: 2,
      recipe_id: 0,
      updated_at: "2023-06-20",
    },
    {
      id: 2,
      name: "きゅうり",
      created_at: "2023-06-20",
      quantity: 3,
      recipe_id: 1,
      updated_at: "2023-06-20",
    },
    {
      id: 3,
      name: "ピーマン",
      created_at: "2023-06-20",
      quantity: 5,
      recipe_id: 1,
      updated_at: "2023-06-20",
    },
  ];

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
            {ingredient.map((item) => {
              return (
                <div key={item.id} className="flex justify-between border-b border-solid border-lightGray px-3 py-2">
                  <div className="flex">
                    <button className="p-1">
                      <Icon type="CircleCheck" color="white" fillColor="lightGray" />
                      {/* <Icon type="CircleCheck" color="white" backgrondColor="lightGray"/> */}
                      {/* <Image className="w-6" src="/images/check_on.svg" width="25" height="25" alt="" /> */}
                    </button>
                    <p className="p-1 text-lightGray">{item.name}</p>
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
            {ingredient.map((item) => {
              return (
                <div key={item.id} className="flex justify-between border-b border-solid border-lightGray px-3 py-2">
                  <div className="flex">
                    <button className="p-1">
                      <Icon type="Circle" color="tomato" />
                    </button>
                    <p className="p-1">{item.name}</p>
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
