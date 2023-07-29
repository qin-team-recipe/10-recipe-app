import { mockDataIngredient } from "@/mock/Recipe";

import { Icon } from "@/components/icon/Icon";
import { TabLinks, type Tab } from "@/components/TabLinks";
import { TopSection } from "@/app/recipe/_common/TopSection";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const IngredientsPages = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tabs: Tab[] = [
    {
      label: "作り方",
      href: `/recipe/${id}`,
      isActive: true,
    },
    {
      label: "材料",
      href: `/recipe/${id}/ingredients`,
    },
  ];
  return (
    <div className="relative mx-auto pb-16">
      <TopSection />
      <TabLinks tabs={tabs} />
      <div className="mx-3 my-4 flex justify-between">
        <p className="text-large font-bold">2人前</p>
        <button>まとめてお買い物に追加</button>
      </div>
      <ul className="mb-3 text-medium">
        {mockDataIngredient.map((i: any) => {
          return (
            <li key={i.id} className="flex justify-between gap-x-2 border-y border-lightGray  px-4 py-2">
              {i.name}
              <div>
                <Icon type={"ShoppingCart"} color="gray" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsPages;
