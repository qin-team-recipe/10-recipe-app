/* eslint-disable import/first */

/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */

import Link from "next/link";

import { mockDataRecipe } from "@/mock";

import { Button } from "@/components/button";
import { ArrowIcon } from "@/components/icons";
import { ImageComponent, ImageGrid } from "@/components/image";

/* eslint-disable import/first */
const recipeNumber = 1234;
const followerNumber = 5678;

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const RecipePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="relative mx-auto">
      <ImageComponent src={mockDataRecipe[0].image_url1} alt={""} ratio={"1/1"} width={"full"} />
      <button type="button" className="absolute left-3 top-3 z-10 cursor-pointer rounded-full p-1.5">
        <Link href={{ pathname: `/` }} passHref>
          <ArrowIcon />
        </Link>
      </button>
      <div className="pt-4">
        <div className="px-4 pb-3 text-large">
          <div>シェフのレシピ</div>
        </div>
        <div className="px-4">
          <div>
            吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
          </div>
          <div className="my-3 flex  justify-start">
            <div className="mr-3">{recipeNumber}レシピ</div>
            <div>{followerNumber}フォロアー</div>
          </div>
          <div>
            <Button color="tomato">お気に入りに追加</Button>
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-center text-center">
            <div className="w-1/2 border-b-2 border-lightGray">作り方</div>
            <div className="w-1/2 border-b border-gray/20 hover:border-b-2  hover:border-gray">
              <Link href={{ pathname: `/chef/${id}/ingredients` }} passHref>
                材料
              </Link>
            </div>
          </div>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
