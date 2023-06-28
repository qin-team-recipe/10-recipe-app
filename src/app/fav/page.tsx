/* eslint-disable tailwindcss/no-custom-classname */
import { NextPage } from "next";
import Link from "next/link";

import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";

type Mock = {
  title: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  src: string;
};

const Fav: NextPage = () => {
  const mockData: Mock[] = [
    {
      title: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
      description: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
      favNum: 2000,
      nameLabel: "山田シェフ",
      src: "/images/sample_chef.jpg",
    },
    {
      title: "トマトとルッコラ",
      description: "トマトとルッコラのマルゲリータ",
      nameLabel: "武田シェフ",
      src: "/images/sample_chef.jpg",
    },
    ...[...Array(10)].map((_) => ({
      title: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
      src: "/images/sample_chef.jpg",
    })),
  ];
  return (
    <div>
      <div className="relative flex items-center  justify-between border-b border-lightGray p-1">
        <div className="mx-auto text-title font-bold">お気に入り</div>
        <div className="p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5"
          >
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          </svg>
        </div>
      </div>
      <div className="py-5">
        <div className="space-y-2">
          <div className="flex items-end justify-between px-4 font-bold">
            <div className="text-large">シェフ</div>
          </div>
          <ImageCarousel>
            {mockData.map((data, index) => (
              <ImageComponent
                key={`bottom-carousel-${index}`}
                alt={`${data.nameLabel || data.title}の画像`}
                description={data.description || "シェフ"}
                descriptionAlign="center"
                src={data.src}
                isCircle
                ratio="1/1"
                width="xSmall"
                addClassNames="mb-8"
              />
            ))}
          </ImageCarousel>
        </div>

        <div className="space-y-2">
          <div className="flex items-end justify-between px-4 font-bold">
            <div className="text-large">新着レシピ</div>
            <div className="contents text-gray">
              <Link href="/fav">マイレシピを作成</Link>
            </div>
          </div>

          <ImageCarousel>
            {mockData.map((data, index) => (
              <ImageComponent
                key={`top-carousel-${index}`}
                title={data.title}
                alt={`${data.nameLabel || data.title}の画像`}
                description={data.description}
                nameLabel={data.nameLabel}
                src={data.src}
                isRounded
                ratio="3/4"
                width="large"
                addClassNames="mb-8"
              />
            ))}
          </ImageCarousel>
        </div>

        <div className="space-y-2">
          <div className="flex items-end justify-between px-4 font-bold">
            <div className="text-large">お気に入りレシピ</div>
            <div className="contents text-gray">
              <Link href="/fav">マイレシピを見る</Link>
            </div>
          </div>
          <div className="space-y-2">
            <ImageGrid addClassNames="mb-8">
              {mockData.slice(0, 10).map((data, index) => (
                <ImageComponent
                  key={`grid-${index}`}
                  src={data.src}
                  isRounded
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
      </div>
    </div>
  );
};

export default Fav;
