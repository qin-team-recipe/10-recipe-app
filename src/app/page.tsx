import Link from "next/link";

import { Recipe, User } from "@prisma/client";

import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/Image";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

const Home = async () => {
  const chefsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef`, { next: { revalidate: 1 } });
  const chefs: User[] = await chefsResponse.json();

  const recipesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe`, { next: { revalidate: 1 } });
  const recipes: Recipe[] = await recipesResponse.json();

  return (
    <div>
      <Header isSearchBar />

      {chefs.length > 0 && (
        <div className="mb-8 space-y-2">
          <SectionTitle title="注目のシェフ" isTitleFontSerif />
          <ImageCarousel>
            {chefs.map((chef) => (
              <Link href={`/chef/${chef.id}`} key={chef.id}>
                <ImageComponent
                  alt={`${chef.name}の画像`}
                  nameLabel={chef.name}
                  src={chef.image_url}
                  isRounded
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
                  description={recipe.description ? recipe.description : undefined}
                  src={recipe.image_url || "https://source.unsplash.com/random"}
                  isRounded
                  ratio="1/1"
                  width="large"
                />
              </Link>
            ))}
          </ImageCarousel>
        </div>
      )}

      {/* TODO: この部分用に新しいエンドポイントを作成する。（それまではシェフデータを改変して対応） */}
      {chefs.length > 0 && (
        <div className="mb-8 space-y-2">
          <SectionTitle title="シェフ" moreText="もっと見る" moreLink="/search/chef" isTitleFontSerif />
          <ImageGrid>
            {chefs.slice(-10).map((chef) => (
              <Link href={`/chef/${chef.id}`} key={chef.id}>
                <div className="flex gap-4">
                  <ImageComponent alt={`${chef.name}の画像`} src={chef.image_url} isRounded ratio="3/4" width="small" />
                  <div>
                    <p className="font-bold">{chef.name}</p>
                    <p className="line-clamp-3 text-medium text-gray">{chef.description}</p>
                    <span className="flex items-center text-medium">
                      <Icon type="ToolsKitchen2" size="small" />
                      {` ${Math.floor(Math.random() * 10)} レシピ`}
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
