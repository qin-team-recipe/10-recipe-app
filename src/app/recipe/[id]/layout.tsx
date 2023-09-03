import Link from "next/link";

import { ImageComponent } from "@/components/Image";
import { type RecipeRelationUser } from "@/app/api/recipe/[id]/route";

import { RecipeFavoriteButton } from "./_component/RecipeFavoriteButton";

const ChefLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/${id}`, { cache: "no-store" });
  const recipe: RecipeRelationUser = await res.json();

  return (
    <div>
      <ImageComponent
        src={recipe.image_url || undefined}
        alt={`${recipe.title}の画像`}
        width="full"
        ratio="1/1"
        addClassNames="relative"
      >
        <span className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-b from-white/0 via-white/70 to-white" />
      </ImageComponent>
      <div className="space-y-2 p-4">
        <h3 className="text-title font-bold">{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="mb-2 flex items-center text-medium">
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
          <span>{`${recipe._count.Favorite} お気に入り`}</span>
        </div>
        <RecipeFavoriteButton />
      </div>
      {children}
    </div>
  );
};

export default ChefLayout;
