import { TabsLink } from "@/components/tab";
import { TopSection } from "@/app/recipe/[id]/_common";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const RecipePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tabMock = [
    {
      label: "作り方",
      href: `/recipe/${id}`,
    },
    {
      label: "材料",
      href: `/recipe/${id}/ingredients`,
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
        <TabsLink tabMock={tabMock} />
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
