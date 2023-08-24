import Link from "next/link";

import { mockDataRecipe, RecipeAppT10Chefs } from "@/mock";

import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon/Icon";
import { ImageComponent, ImageGrid } from "@/components/Image";
import { TabLinks, type Tab } from "@/components/TabLinks";

/* eslint-disable import/first */
const followerNumber = 5678;

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const ChefPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  //TabLinksの実装例
  const tabs: Tab[] = [
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
      {/* <ImageComponent alt={""} ratio={"1/1"} width={"full"} /> */}
      <button type="button" className="absolute left-3 top-3 cursor-pointer rounded-full p-1.5">
        <Link href="/">
          <Icon type="ArrowLeft" color="white" />
        </Link>
      </button>
      <div className="pt-4">
        <div className="px-4 pb-3 text-large">
          {RecipeAppT10Chefs[0].name} <span className="text-medium">シェフ</span>
        </div>
        <div className="px-4">
          <div>{RecipeAppT10Chefs[0].description}</div>
          <div className="my-3">{followerNumber}フォロアー</div>
          <div>
            <Button color="tomato">フォローする</Button>
          </div>
        </div>
        <div>
          {/* TabLinksの実装例 */}
          <TabLinks tabs={tabs} />
        </div>
        <ImageGrid isTwoColumns addClassNames="mb-8 mt-4">
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
    </div>
  );
};

export default ChefPage;
