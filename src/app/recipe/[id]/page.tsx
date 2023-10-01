import { Empty } from "@/components/Empty/Empty";
import { type Tab } from "@/components/TabLinks/TabLinks";
import { RecipeItem } from "@/app/api/recipe/[id]/route";

import { RecipeBottomSection } from "./_component/RecipeBottomSection";

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipe/${id}`, { cache: "no-store" });
  const recipe: RecipeItem = await res.json();

  const tabs: Tab[] = [
    {
      label: "作り方",
      href: `/recipe/${id}`,
      isActive: true,
    },
    {
      label: "材料",
      href: `/recipe/${id}/ingredients`,
    },
  ];

  return (
    <RecipeBottomSection tabs={tabs}>
      {recipe.instructions.length ? (
        <ul>
          {recipe.instructions.map((instruction, i) => (
            <li key={i} className="flex items-start border-b border-lightGray px-4 py-2">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-tomato text-small text-white">
                {i + 1}
              </span>
              <p className="w-full">{instruction}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Empty text="作り方が登録されていません" />
      )}
    </RecipeBottomSection>
  );
};

export default RecipePage;
