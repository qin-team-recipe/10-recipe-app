import Link from "next/link";

import { FavRecipeCard } from "@/app/fav/_component";

export const FavRecipeContents = () => {
  const favRecipeCard = Array.from({ length: 10 }).map((_, i) => {
    return <FavRecipeCard key={i} />;
  });

  return (
    <div>
      <div className="flex items-end justify-between px-4 font-bold">
        <div className="text-large">お気に入りレシピ</div>
        <div className="contents text-gray">
          <Link href="/fav">マイレシピを見る</Link>
        </div>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-2 gap-4 px-4">{favRecipeCard}</div>
      </div>
    </div>
  );
};
