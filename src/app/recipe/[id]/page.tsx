import { mockDataRecipe } from "@/mock";

import { CopyIcon } from "@/components/icons";
import { Tab, TabLinks } from "@/components/TabLinks";
import { TopSection } from "@/app/recipe/_common/TopSection";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const RecipePage = ({ params }: { params: { id: string } }) => {
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
      <ul className="mb-3">
        {mockDataRecipe.map((recipe) => {
          return (
            <li key={recipe.id} className="flex w-full items-start gap-x-2 border-y border-lightGray  px-4 py-2">
              <div className="grid h-5 w-5 shrink-0 select-none place-items-center rounded-full  bg-tomato text-small text-white">
                {recipe.id}
              </div>
              <div className="leading-snug">{recipe.description}</div>
            </li>
          );
        })}
      </ul>
      <div className="flex h-4 flex-row-reverse">
        <button className="flex items-center px-4 text-blue">
          <CopyIcon />
          コピーする
        </button>
      </div>
    </div>
  );
};

export default RecipePage;
