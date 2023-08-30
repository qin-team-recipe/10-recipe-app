import { type RecipeAndUser } from "@/types";

import { RecipeTopSection } from "./_component/RecipeTopSection";

const ChefLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/${id}`, { cache: "no-store" });
  const recipe: RecipeAndUser = await res.json();

  return (
    <div>
      <RecipeTopSection recipe={recipe} />
      {children}
    </div>
  );
};

export default ChefLayout;
