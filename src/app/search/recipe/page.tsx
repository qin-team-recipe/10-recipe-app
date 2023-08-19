import { NextPage } from "next";
import Link from "next/link";

import { mockDataRecipe } from "@/mock";

import { Header } from "@/components/Header";
import { ImageComponent, ImageGrid } from "@/components/image";
import { Tab, TabLinks } from "@/components/TabLinks";

const ListRecipePage: NextPage = () => {
  const tabs: Tab[] = [
    {
      label: "レシピ",
      href: `/search/recipe`,
      isActive: true,
    },
    {
      label: "シェフ",
      href: `/search/chef`,
    },
  ];
  return (
    <div>
      <Header isSearchBar />
      <TabLinks tabs={tabs} />
      <div className="space-y-2">
        <div className="flex items-center justify-between px-4 pt-4 font-bold">
          <p className="text-large">話題のレシピ</p>
        </div>

        <ImageGrid isTwoColumns addClassNames="mb-8">
          {mockDataRecipe.map((data, index) => (
            <Link key={`top-carousel-${index}`} href={{ pathname: `/recipe/${index}` }}>
              <ImageComponent
                // title={data.title}
                alt={`${data.title}の画像`}
                src={data.image_url1}
                ratio="1/1"
                width="large"
                addClassNames="ml-4"
              />
            </Link>
          ))}
        </ImageGrid>
      </div>
    </div>
  );
};

export default ListRecipePage;
