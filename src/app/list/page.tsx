import { NextPage } from "next";

const Page: NextPage = () => {
  const isLogin = true;

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
      recipe_id: 2,
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
      name: "トマト",
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
      recipe_id: 0,
      updated_at: "2023-06-20",
    },
    {
      id: 3,
      name: "ピーマン",
      created_at: "2023-06-20",
      quantity: 5,
      recipe_id: 0,
      updated_at: "2023-06-20",
    },
  ];

  return (
    <>
      <p className="w-full p-2 text-center font-bold [border-bottom:solid_1px_lightgray]">買い物リスト</p>
      {isLogin ? (
        <div>
          <div className="mt-3 flex justify-between p-3 [border-bottom:1px_solid_lightgray]">
            <p className="text-[18px] font-bold">じぶんメモ</p>
            <p className="w-[28px] cursor-pointer text-[20px]">＋</p>
          </div>
          <div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between p-3 [border-bottom:1px_solid_lightgray]">
            <p className="text-[18px] font-bold">グラタン</p>
            <p className="w-[28px] cursor-pointer text-[20px]">︙</p>
          </div>
          <div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
            <div className="flex justify-between px-3 py-2 [border-bottom:1px_solid_lightgray]">
              <div className="flex">
                <button className="p-1">
                  <img className="w-[24px]" src="/images/check_on.svg" alt="" />
                </button>
                <p className="p-1">キャベツ</p>
              </div>
              <p className="cursor-pointer p-1 text-tomato hover:[text-decoration-line:underline]">削除</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img className="w-[240px]" src="/images/sample_list.png" alt="" />
          <p className="py-2 text-center font-bold">ログインをお願いします</p>
          <p className="text-center text-[14px]">こちらの機能を利用するにはログインが必要です</p>
          <div className="flex w-[370px] justify-between py-4">
            <button className="w-[180px] rounded-[10px]  bg-blue p-[10px] font-bold text-white hover:opacity-[.8]">
              Google ログイン
            </button>
            <button className="w-[180px] rounded-[10px]  bg-black p-[10px] font-bold text-white hover:opacity-[.8]">
              Apple ログイン
            </button>
          </div>
          <p className="text-center text-[12px]">↑ cookiesを使ってログインっぽい挙動にしてます ↑</p>
        </div>
      )}
    </>
  );
};

export default Page;
