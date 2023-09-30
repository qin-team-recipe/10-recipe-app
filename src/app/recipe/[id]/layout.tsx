import Link from "next/link";

import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";

import { ImageComponent } from "@/components/Image";
import { type RecipeItem } from "@/app/api/recipe/[id]/route";

import { RecipeActionButton } from "./_component/RecipeActionButton";

const RecipeLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const resRecipe = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/${id}`, { cache: "no-store" });
  const recipe: RecipeItem = await resRecipe.json();

  // ログインユーザー本人の画面かどうか
  const { userData } = await getAuthDataForServer();
  const isSelfUser = userData?.id === recipe.user_id;

  const resFavoriteRecipe = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favorite/${id}?id=${userData?.id}`, {
    cache: "no-store",
  });
  const favoriteRecipe = await resFavoriteRecipe.json();

  const recipeStatus = recipe.status === "PRIVATE" ? "非公開" : "公開";

  return (
    <div>
      {!isSelfUser && (
        <ImageComponent
          src={recipe.image_url || undefined}
          alt={`${recipe.title}の画像`}
          width="full"
          ratio="1/1"
          addClassNames="relative"
        >
          <span className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-b from-white/0 via-white/70 to-white" />
        </ImageComponent>
      )}
      <div className="space-y-2 p-4">
        <h3 className="text-title font-bold">{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="mb-2 flex items-center text-medium">
          {isSelfUser ? (
            <span className="mr-2 rounded border border-lightGray px-1 py-0.5 text-small text-gray">
              {recipeStatus}
            </span>
          ) : (
            <Link href={`/chef/${recipe.user.id}`} className="mr-4 flex items-center">
              <ImageComponent
                src={recipe.user.image_url}
                alt=""
                width="xxSmall"
                ratio="1/1"
                isCircle
                isShadow
                addClassNames="mr-2"
              />
              <span>{recipe.user.name}</span>
            </Link>
          )}
          <span>{`${recipe._count.Favorite} お気に入り`}</span>
        </div>
        <RecipeActionButton
          isFavorite={!!favoriteRecipe}
          isSelfUserRecipe={isSelfUser}
          recipeId={id}
          userId={userData?.id}
        />
      </div>
      {children}
    </div>
  );
};

export default RecipeLayout;
