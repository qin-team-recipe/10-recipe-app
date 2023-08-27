import { IngredientsAndIngredient } from "@/types";

import { type Tab } from "@/components/TabLinks";

import { RecipeBottomSection } from "../_component/RecipeBottomSection";

const RecipeIngredientsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients?recipe_id=${id}`, {
    next: { revalidate: 10 },
  });
  const jsonData = await res.json();
  // NOTE: recipe_idで絞り込んだ材料リスト（ユニーク）を配列で取得しているので、0番目の要素を取得する
  const ingredients: IngredientsAndIngredient = jsonData[0];

  const tabs: Tab[] = [
    {
      label: "作り方",
      href: `/recipe/${id}`,
    },
    {
      label: "材料",
      href: `/recipe/${id}/ingredients`,
      isActive: true,
    },
  ];

  return (
    <RecipeBottomSection tabs={tabs}>
      <div className="flex items-center border-b border-lightGray px-4 py-2">
        <p className="font-bold">{`${ingredients.quantity}人前`}</p>
      </div>
      <ul>
        {ingredients.ingredient.map((ingredient) => (
          <li key={ingredient.id} className="border-b border-lightGray px-4 py-2">
            {ingredient.name}
          </li>
        ))}
      </ul>
    </RecipeBottomSection>
  );
};

export default RecipeIngredientsPage;
