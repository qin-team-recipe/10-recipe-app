/* eslint-disable import/first */

/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */

import { RecipeAppTeam10 } from "@/mock";

import { FollowButton } from "@/components/button";
import { ArrowIcon, ThreeDotsIcon } from "@/components/icons";
import { ImageComponent, ImageGrid } from "@/components/image";

/* eslint-disable import/first */
const recipeNumber = 1234;
const followerNumber = 5678;

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="relative mx-auto">
      <button type="button" className="absolute left-3 top-3 z-10 cursor-pointer rounded-full p-1.5">
        <ArrowIcon />
      </button>
      <ImageComponent alt={""} ratio={"1/1"} width={"full"} />
      <div className="pt-4">
        <div className="flex justify-between px-4">
          <div>しまぶーシェフ</div>
          <div>
            <button
              className="-mr-0.5 -mt-px rounded p-1 outline-none hover:bg-gray focus-visible:ring-2"
              type="button"
              id="radix-:r0:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <ThreeDotsIcon />
            </button>
          </div>
        </div>
        <div className="px-4">
          <div>
            吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
          </div>
          <div className="mt-3 flex  justify-start">
            <div className="mr-3">{recipeNumber}レシピ</div>
            <div>{followerNumber}フォロアー</div>
          </div>
          <div>
            <FollowButton />
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-center text-center">
            <div className="border-light_gray w-1/2 border-b-2">レシピ</div>
            <div className="w-1/2 border-b border-gray/20 hover:border-b-2  hover:border-gray">リンク</div>
          </div>
        </div>
        <ImageGrid addClassNames="mb-8 mt-4">
          {RecipeAppTeam10.slice(0, 8).map((data, index) => (
            <ImageComponent
              key={`grid-${index}`}
              src={data.src}
              alt={`${data.title}の画像`}
              width="full"
              favNum={data.favNum}
              ratio="1/1"
              nameLabel={data.nameLabel}
            />
          ))}
        </ImageGrid>
      </div>
    </div>
  );
};

export default Page;
