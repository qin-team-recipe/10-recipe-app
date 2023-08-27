import { RecipeAndFavCount } from "@/types";

import { type Tab } from "@/components/TabLinks";

import { ChefBottomSection } from "./_component/ChefBottomSection";

const ChefPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe?id=${id}`, { next: { revalidate: 10 } });
  const recipes: RecipeAndFavCount[] = await res.json();

  const tabs: Tab[] = [
    {
      label: "新着レシピ",
      href: `/chef/${id}`,
      isActive: true,
    },
    {
      label: "人気レシピ",
      href: `/chef/${id}/popular`,
    },
  ];

  return <ChefBottomSection tabs={tabs} recipes={recipes} />;
};

export default ChefPage;
