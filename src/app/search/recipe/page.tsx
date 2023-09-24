import Link from "next/link";

import { ImageComponent, ImageGrid } from "@/components/Image";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { TabLinks, type Tab } from "@/components/TabLinks/TabLinks";
import { type RecipeList } from "@/app/api/recipe/route";

const SearchRecipePage = async () => {
  const recipesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe`);
  const recipes: RecipeList = await recipesResponse.json();

  const tabs: Tab[] = [
    {
      label: "シェフ",
      href: `/search/chef`,
    },
    {
      label: "レシピ",
      href: `/search/recipe`,
      isActive: true,
    },
  ];

  return (
    <div>
      <SearchBar />
      <TabLinks tabs={tabs} />
      <div className="mt-5">
        {recipes.length > 0 && (
          <div className="mb-8 space-y-2">
            <SectionTitle title="話題のレシピ" isTitleFontSerif />
            <ImageGrid isTwoColumns>
              {recipes.map((recipe) => (
                <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
                  <ImageComponent
                    key={recipe.id}
                    title={recipe.title}
                    alt={`${recipe.title}の画像`}
                    description={recipe.description || undefined}
                    src={recipe.image_url || undefined}
                    isRounded
                    isShadow
                    ratio="1/1"
                    width="large"
                    favNum={recipe._count.Favorite}
                  />
                </Link>
              ))}
            </ImageGrid>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRecipePage;
