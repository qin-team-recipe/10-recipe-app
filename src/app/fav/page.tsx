import { NextPage } from "next";
import Link from "next/link";

import { mockDataFav } from "@/mock";

import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";
import { TitleLayout } from "@/components/title";

const Fav: NextPage = () => {
  return (
    <div>
      <TitleLayout title="お気に入り" />
      <div className="py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between px-4 font-bold">
            <div className="text-large">シェフ</div>
          </div>
          <ImageCarousel>
            {mockDataFav.map((data, index) => (
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
          <div className="flex items-center justify-between px-4 font-bold">
            <p className="text-large">新着レシピ</p>
            <div className="text-gray">
              <Link href="/fav">
                <p>マイレシピを作成</p>
              </Link>
            </div>
          </div>

          <ImageCarousel>
            {mockDataFav.map((data, index) => (
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
          <div className="flex items-center justify-between px-4 font-bold">
            <p className="text-large">お気に入りレシピ</p>
            <div className="text-gray">
              <Link href="/fav">
                <p>マイレシピを見る</p>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <ImageGrid addClassNames="mb-8">
              {mockDataFav.slice(0, 10).map((data, index) => (
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
