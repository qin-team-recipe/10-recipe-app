/* eslint-disable import/first */

/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */

import Link from "next/link";

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
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const ChefPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="relative mx-auto">
      <button type="button" className="absolute left-3 top-3 z-10 cursor-pointer rounded-full p-1.5">
        <Link href={{ pathname: `/` }} passHref>
          <ArrowIcon />
        </Link>
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
          <div>{RecipeAppTeam10[0].description}</div>
          <div className="my-3 flex  justify-start">
            <div className="mr-3">{recipeNumber}レシピ</div>
            <div>{followerNumber}フォロアー</div>
          </div>
          <div>
            <FollowButton />
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-center text-center">
            <div className="border-light_gray w-1/2 border-b-2">
              <Link href={{ pathname: `/chef/${id}` }} passHref>
                レシピ
              </Link>
            </div>
            <div className="w-1/2 border-b border-gray/20 hover:border-b-2  hover:border-gray">
              <Link href={{ pathname: `/chef/${id}` }} passHref>
                リンク
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-2">
          <ul className="pl-3">
            <li className="flex border-b border-lightGray pb-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                Instagram<div></div>
                <div className="text-small">{} フォロワー ・</div>
                {}
              </div>
            </li>
            <li className="flex border-b border-lightGray py-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                Twitter<div></div>
                <div className="text-small">{} フォロワー ・</div>
                {}
              </div>
            </li>
            <li className="flex border-b border-lightGray py-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                YouTube<div></div>
                <div className="text-small">{} フォロワー ・</div>
                {}
              </div>
            </li>
            <li className="flex border-b border-lightGray py-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                Hoge Hoge<div></div>
                <div className="text-small">
                  <Link target="_blank" href={{ pathname: `https://example.com/` }} passHref>
                    https://example.com/
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChefPage;
