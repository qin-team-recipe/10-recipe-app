import Link from "next/link";

import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";

import { Empty } from "@/components/Empty/Empty";
import { Header } from "@/components/Header/Header";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/Image";
import { Login } from "@/components/Login/Login";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { FavoriteList } from "@/app/api/favorite/route";
import { FollowList } from "@/app/api/follow/route";

const FavPage = async () => {
  const { session, userData } = await getAuthDataForServer();

  // フォローしているユーザー
  const followingChefsRes = userData?.name
    ? await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/follow?id=${userData.id}`, {
        cache: "no-store",
      })
    : undefined;
  const followingChefsObj: FollowList = await followingChefsRes?.json();
  const followingChefs = followingChefsObj?.map((obj) => obj.followed);

  // フォローしているユーザーのレシピ(日付昇順)
  const followingChefsRecipes = followingChefs?.map((chef) => chef.Recipe);
  const sortedRecipes = followingChefsRecipes
    ?.flat()
    .sort((a, b) => ((a.created_at || "") < (b.created_at || "") ? 1 : -1));

  // お気に入りレシピ
  const favRecipesRes = userData?.name
    ? await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favorite?id=${userData.id}`, {
        cache: "no-store",
      })
    : undefined;
  const favRecipesObj: FavoriteList = favRecipesRes ? await favRecipesRes?.json() : undefined;
  const favRecipes = favRecipesObj?.map((obj) => obj.recipe);

  return (
    <div>
      <Header
        position="center"
        title="お気に入り"
        isMenuIcon={!!session}
        userPageHref={userData?.name ? `${process.env.NEXT_PUBLIC_API_URL}/chef/${userData.id}` : undefined}
      />
      {session ? (
        followingChefs.length || sortedRecipes.length || favRecipes.length ? (
          <div className="space-y-8 py-4">
            {followingChefs.length > 0 && (
              <div>
                <SectionTitle title="シェフ" addClassNames="mb-2" />
                <ImageCarousel>
                  {followingChefs.map((chef) => (
                    <Link href={`/chef/${chef.id}`} key={chef.id}>
                      <ImageComponent
                        alt={`${chef.name}の画像`}
                        description={chef.name}
                        descriptionAlign="center"
                        src={chef.image_url}
                        isCircle
                        ratio="1/1"
                        width="xSmall"
                      />
                    </Link>
                  ))}
                </ImageCarousel>
              </div>
            )}

            {sortedRecipes.length > 0 && (
              <div>
                <SectionTitle title="新着レシピ" moreText="もっと見る" moreLink="/" addClassNames="mb-2" />
                <ImageCarousel>
                  {sortedRecipes.map((recipe) => (
                    <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
                      <ImageComponent
                        title={recipe.title}
                        alt={`${recipe.title}の画像`}
                        description={recipe.description || undefined}
                        favNum={recipe._count.Favorite}
                        src={recipe.image_url || undefined}
                        isRounded
                        ratio="1/1"
                        width="large"
                      />
                    </Link>
                  ))}
                </ImageCarousel>
              </div>
            )}

            {favRecipes.length > 0 && (
              <div>
                <SectionTitle title="お気に入りレシピ" addClassNames="mb-2" />
                <ImageGrid isTwoColumns>
                  {favRecipes.map((recipe) => (
                    <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
                      <ImageComponent
                        src={recipe.image_url || undefined}
                        isRounded
                        alt={`${recipe.title}の画像`}
                        width="full"
                        favNum={recipe._count.Favorite}
                        ratio="1/1"
                      />
                    </Link>
                  ))}
                </ImageGrid>
              </div>
            )}
          </div>
        ) : (
          <Empty text="フォローしているシェフまたはお気に入りしたレシピがありません。" />
        )
      ) : (
        <Login imageType="favorite" />
      )}
    </div>
  );
};

export default FavPage;
