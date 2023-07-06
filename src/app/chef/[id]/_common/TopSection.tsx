import Link from "next/link";

import { RecipeAppT10Chefs } from "@/mock";

import { Button } from "@/components/button";
import { ArrowIcon } from "@/components/icons";
import { ImageComponent } from "@/components/image";

const followerNumber = 5678;

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

export const TopSection = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <ImageComponent alt={`${RecipeAppT10Chefs[0].name}の画像`} ratio={"1/1"} width={"full"} />
      <button type="button" className="absolute left-3 top-3 cursor-pointer rounded-full p-1.5">
        <Link href="/">
          <ArrowIcon />
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
      </div>
    </div>
  );
};
