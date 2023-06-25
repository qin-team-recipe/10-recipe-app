import Link from "next/link";

export const FavRecipeCard = () => {
  return (
    <Link className="contents" href="/recipe">
      <div className="aspect-square bg-tomato"></div>
    </Link>
  );
};
