import Link from "next/link";

import { RecipeAndFavCount, UserAndRelationCount } from "@/types";
import { User } from "@prisma/client";

import { Icon } from "@/components/Icon/Icon";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/Image";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

const Home = async () => {
  const chefsSortFavResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/followerCountManyOrder`, {
    next: { revalidate: 10 },
  });
  const chefsSortFav: User[] = await chefsSortFavResponse.json();

  const chefsSortNameResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/`, {
    next: { revalidate: 10 },
  });
  const chefsSortName: UserAndRelationCount[] = await chefsSortNameResponse.json();

  const recipesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe`, { next: { revalidate: 10 } });
  const recipes: RecipeAndFavCount[] = await recipesResponse.json();

  return (
    <div>
      <SearchBar />

      {chefsSortFav.length > 0 && (
        <div className="mb-8 space-y-2">
          <SectionTitle title="注目のシェフ" isTitleFontSerif />
          <ImageCarousel>
            {chefsSortFav.map((chef) => (
              <Link href={`/chef/${chef.id}`} key={chef.id}>
                <ImageComponent
                  alt={`${chef.name}の画像`}
                  nameLabel={chef.name}
                  src={chef.image_url}
                  isRounded
                  isShadow
                  ratio="1/1"
                  width="medium"
                />
              </Link>
            ))}
          </ImageCarousel>
        </div>
      )}

      {recipes.length > 0 && (
        <div className="mb-8 space-y-2">
          <SectionTitle title="話題のレシピ" moreText="もっと見る" moreLink="/search/recipe" isTitleFontSerif />
          <ImageCarousel>
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
          </ImageCarousel>
        </div>
      )}

      {chefsSortName.length > 0 && (
        <div className="mb-8 space-y-2">
          <SectionTitle title="シェフ" moreText="もっと見る" moreLink="/search/chef" isTitleFontSerif />
          <ImageGrid>
            {chefsSortName.map((chef) => (
              <Link href={`/chef/${chef.id}`} key={chef.id}>
                <div className="flex gap-4">
                  <ImageComponent
                    alt={`${chef.name}の画像`}
                    src={chef.image_url}
                    isRounded
                    isShadow
                    ratio="3/4"
                    width="small"
                  />
                  <div>
                    <p className="font-bold">{chef.name}</p>
                    <p className="line-clamp-3 text-medium text-gray">{chef.description}</p>
                    <span className="flex items-center text-medium">
                      <Icon type="ToolsKitchen2" size="small" />
                      {` ${chef._count.Recipe} レシピ`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </ImageGrid>
        </div>
      )}
    </div>
  );
};

export default Home;
