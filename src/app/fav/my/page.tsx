import { NextPage } from "next";
import Link from "next/link";

import { mockDataRecipe, RecipeAppT10Chefs } from "@/mock";

import { Icon } from "@/components/icon/Icon";
import { ImageComponent, ImageGrid } from "@/components/image";
import { Tab, TabLinks } from "@/components/TabLinks";

const MyPage: NextPage = () => {
  const chefName = RecipeAppT10Chefs[0].name;
  const favNum = RecipeAppT10Chefs[0].favNum;
  const tabs: Tab[] = [
    {
      label: "新着レシピ",
      href: `/fav/my`,
      isActive: true,
    },
    {
      label: "人気レシピ",
      href: `/fav/my/popular`,
    },
  ];
  return (
    <div className="relative">
      <button type="button" className="absolute left-3 top-3 cursor-pointer rounded-full p-1.5">
        <Link href="/fav">
          <Icon type="ArrowLeft" color="black" />
        </Link>
      </button>
      <div className="py-16">
        <div className="space-y-2">
          <div className="flex flex-col px-4 ">
            <div className="text-large font-bold">{chefName} シェフ</div>
            <div className="my-3 flex gap-3">
              <div className="text-small">{favNum} レシピ</div>
              <div className="text-small">{favNum} フォロアー</div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mx-3 flex-1 rounded border border-lightGray px-2 py-1">プロフィールを編集</button>
          </div>
        </div>
        <div className="space-y-6">
          <TabLinks tabs={tabs} />
          <div className="relative">
            <ImageGrid addClassNames="mb-8">
              {mockDataRecipe.slice(0, 10).map((data, index) => (
                <ImageComponent
                  key={`grid-${index}`}
                  src={data.image_url1}
                  isRounded
                  alt={`${data.title}の画像`}
                  width="full"
                  ratio="1/1"
                  description={data.description}
                />
              ))}
            </ImageGrid>
            <button className="absolute bottom-52 left-[33%] rounded-full bg-tomato px-2 py-1 text-medium text-white">
              <Link href="recipe/new">マイレシピを追加する</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
