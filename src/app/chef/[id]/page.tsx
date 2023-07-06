import Link from "next/link";

import { mockDataRecipe } from "@/mock";

import { ImageComponent, ImageGrid } from "@/components/image";
import { TabsLink } from "@/components/tab";
import { TopSection } from "@/app/chef/[id]/_common";

/* eslint-disable import/first */

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const ChefPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tabs = [
    {
      label: "レシピ",
      href: `/chef/${id}`,
      isActive: true,
    },
    {
      label: "リンク",
      href: `/chef/${id}/link`,
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
      </div>
      <ImageGrid addClassNames="mb-8 mt-4">
        {mockDataRecipe.slice(0, 8).map((data, index) => (
          <Link href={`/recipe/${id}`} key={id}>
            <ImageComponent
              key={`grid-${index}`}
              src={data.image_url1}
              alt={`${data.title}の画像`}
              width="full"
              ratio="1/1"
              isRounded
            />
          </Link>
        ))}
      </ImageGrid>
    </div>
  );
};

export default ChefPage;
