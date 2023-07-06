import { TabsLink } from "@/components/tab";
import { TopSection } from "@/app/recipe/[id]/_common";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const IngredientPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tabs = [
    {
      label: "作り方",
      href: `/recipe/${id}`,
    },
    {
      label: "材料",
      href: `/recipe/${id}/ingredients`,
      isActive: true,
    },
  ];
  return (
    <div className="relative mx-auto">
      <TopSection
        params={{
          id: `${id}`,
        }}
      />
      <div>
        <TabsLink tabs={tabs} />
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
};

export default IngredientPage;
