import { NextPage } from "next";
import Link from "next/link";

import { mockDataFav, mockDataRecipe, RecipeAppT10Chefs } from "@/mock";
import { ToolsKitchen2 } from "tabler-icons-react";

import { Header } from "@/components/Header";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";

const Search: NextPage = () => {
  return (
    <div>
      <Header isSearchBar />
      <div className="space-y-2">
        <div className="flex items-center justify-between px-4 font-bold">
          <div className="text-large">注目のシェフ</div>
        </div>
        <ImageCarousel>
          {mockDataFav.map((data, index) => (
            <ImageComponent
              key={`bottom-carousel-${index}`}
              alt={`${data.nameLabel || data.title}の画像`}
              nameLabel={data.nameLabel}
              src={data.src}
              isRounded
              ratio="1/1"
              width="medium"
              addClassNames="mb-8"
            />
          ))}
        </ImageCarousel>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between px-4 font-bold">
          <p className="text-large">話題のレシピ</p>
          <div className="text-gray">
            <Link href="/fav">
              <p>もっと見る</p>
            </Link>
          </div>
        </div>

        <ImageCarousel>
          {mockDataRecipe.map((data, index) => (
            <ImageComponent
              key={`top-carousel-${index}`}
              title={data.title}
              alt={`${data.title}の画像`}
              description={data.description}
              src={data.image_url1}
              isRounded
              ratio="1/1"
              width="large"
              addClassNames="mb-8"
            />
          ))}
        </ImageCarousel>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between px-4 font-bold">
          <p className="text-large">シェフ</p>
          <div className="text-gray">
            <Link href="/fav">
              <p>もっと見る</p>
            </Link>
          </div>
        </div>
        <div className="space-y-2 ">
          <ImageGrid isTwoColumns={false} addClassNames="mb-8">
            {RecipeAppT10Chefs.slice(0, 10).map((data, index) => (
              <div key={`grid-${index}`} className="flex gap-4">
                <ImageComponent src={data.image_url} isRounded alt={`${data.name}の画像`} width="small" ratio="3/4" />
                <div className="flex flex-col space-y-2">
                  <p className="text-large font-bold">{data.name}</p>
                  <p className="text-small text-gray">{data.description}</p>
                  <div className="flex space-x-2">
                    <p>
                      <ToolsKitchen2 />
                    </p>
                    <p>{data.favNum}</p>
                    <p>レシピ</p>
                  </div>
                </div>
              </div>
            ))}
          </ImageGrid>
        </div>
      </div>
    </div>
  );
};

export default Search;
