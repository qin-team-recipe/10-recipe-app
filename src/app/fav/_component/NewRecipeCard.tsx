import Link from "next/link";

export const NewRecipeCard = () => {
  return (
    <Link className="contents" href="/recipe">
      <div className="aspect-square bg-tomato"></div>
    </Link>
  );
};
