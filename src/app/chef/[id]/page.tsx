/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { ArrowIcon } from "@/app/chef/ArrowIcon";
import { ThreeDotsIcon } from "@/app/chef/ThreeDotsIcon";

const recipeNumber = 1234;
const followerNumber = 5678;
const Images = [
  {
    id: "1",
    image_url: "",
    link: "",
  },
  {
    id: "2",
    image_url: "",
    link: "",
  },
  {
    id: "3",
    image_url: "",
    link: "",
  },
];

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="relative mx-auto max-w-md border-x border-light_gray/30">
      <button type="button" className="absolute left-3 top-3 z-10 cursor-pointer rounded-full p-1.5">
        <ArrowIcon />
      </button>
      <div className="relative aspect-square bg-tomato/10">Image</div>
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
            <button className="rounded-sm bg-tomato px-3 py-1 text-sm text-white">フォローする</button>
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-center text-center">
            <div className="w-1/2 border-b-2 border-light_gray">レシピ</div>
            <div className="w-1/2 border-b border-gray/20 hover:border-b-2  hover:border-gray">リンク</div>
          </div>
        </div>
      </div>
      {/* recipe grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="relative aspect-square bg-tomato/10">Image</div>
        <div className="relative aspect-square bg-tomato/10">Image</div>
        <div className="relative aspect-square bg-tomato/10">Image</div>
        <div className="relative aspect-square bg-tomato/10">Image</div>
        <div className="relative aspect-square bg-tomato/10">Image</div>
        <div className="relative aspect-square bg-tomato/10">Image</div>
      </div>
    </div>
  );
};

export default Page;
