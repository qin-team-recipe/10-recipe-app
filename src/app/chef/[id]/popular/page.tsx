import { type Tab } from "@/components/TabLinks/TabLinks";
import { type RecipeList } from "@/app/api/recipe/route";

import { ChefBottomSection } from "../_component/ChefBottomSection";

const ChefPopularPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe?id=${id}&sort=fav`, { cache: "no-store" });
  const recipes: RecipeList = await res.json();

  const tabs: Tab[] = [
    {
      label: "新着レシピ",
      href: `/chef/${id}`,
    },
    {
      label: "人気レシピ",
      href: `/chef/${id}/popular`,
      isActive: true,
    },
  ];

  return <ChefBottomSection tabs={tabs} recipes={recipes} />;
};

export default ChefPopularPage;
