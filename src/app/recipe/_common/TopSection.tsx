import Link from "next/link";

import { mockDataRecipe, RecipeAppT10Chefs } from "@/mock";

import { Button } from "@/components/button";
import { Icon } from "@/components/icon/Icon";
import { ImageComponent } from "@/components/image";

const favNumber = 1234;
const chefName = RecipeAppT10Chefs[0].name;

export const TopSection = () => {
  return (
    <div className="text-medium">
      <ImageComponent
        src={mockDataRecipe[0].image_url1}
        alt={`${mockDataRecipe[0].title}の画像`}
        ratio={"1/1"}
        width={"full"}
      />
      <button type="button" className="absolute left-3 top-3 cursor-pointer rounded-full p-1.5">
        <Link href="/">
          <Icon type="ArrowLeft" color="white" />
        </Link>
      </button>
      <div className="pt-4">
        <h3 className="px-4 pb-3 text-large font-bold">シェフのレシピ</h3>
        <div className="px-4">
          <p>
            吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
          </p>
          <div className="my-3 flex">
            <div className="mr-3 flex  items-center">
              <ImageComponent
                src={RecipeAppT10Chefs[0].image_url}
                alt={`${RecipeAppT10Chefs[0].name}の画像`}
                ratio={"1/1"}
                width={"xxSmall"}
                isCircle
              />
              <div className="ml-1">{chefName} シェフ</div>
            </div>
            <div className="">{favNumber} お気に入り</div>
          </div>
          <div>
            <Button color="tomato">お気に入りに追加</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
