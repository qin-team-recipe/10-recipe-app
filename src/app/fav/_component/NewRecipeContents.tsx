import Link from "next/link";

import { NewRecipeCard } from "@/app/fav/_component";

export const NewRecipeContents = () => {
  const newRecipeCard = Array.from({ length: 10 }).map((_, i) => {
    return <NewRecipeCard key={i} />;
  });

  return (
    <div>
      <div className="flex items-end justify-between px-4 font-bold">
        <div className="text-large">新着レシピ</div>
        <div className="contents text-gray">
          <Link href="/fav">もっと見る</Link>
        </div>
      </div>
      <div className="hidden-scrollbar overflow-x-scroll whitespace-nowrap px-2 py-4">
        <div className="table min-w-full">
          <div className="flex h-32 gap-4 px-4">{newRecipeCard}</div>
        </div>
      </div>
    </div>
  );
};
