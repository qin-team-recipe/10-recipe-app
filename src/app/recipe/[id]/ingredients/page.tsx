import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";

import { Empty } from "@/components/Empty/Empty";
import { type Tab } from "@/components/TabLinks/TabLinks";
import { type IngredientsList } from "@/app/api/ingredients/route";
import { AddIngredients } from "@/app/recipe/[id]/_component/AddIngredients";
import { AllAddIngredients } from "@/app/recipe/[id]/_component/AllAddIngredients";

import { RecipeBottomSection } from "../_component/RecipeBottomSection";

const RecipeIngredientsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients?recipe_id=${id}`, { cache: "no-store" });
  const jsonData: IngredientsList = await res.json();
  // recipe_idで絞り込んだ材料リストを配列で取得しているので、0番目の要素を取得する
  // ショッピングリストに追加したIngredientsListとレシピに紐づいたIngredientsListの二つが存在する可能性があるが
  // is_shopping_listフラグの有無飲みの違いのみなので、0番目の要素を取得しても問題ない
  const ingredients = jsonData[0];
  const isAddingIngredientsList = jsonData.find((item) => item.is_shopping_list);

  const { userData } = await getAuthDataForServer();

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
      {ingredients ? (
        <div>
          <div className="flex items-center border-b border-lightGray px-4 py-2">
            <div className="flex w-full items-center justify-between">
              <p className="font-bold">{`${ingredients.quantity}人前`}</p>
              <AllAddIngredients
                ingredient={ingredients.ingredient.map((item) => item.name || "").filter(Boolean)}
                recipeId={id}
                userId={userData?.id}
                isDisabled={!!isAddingIngredientsList}
              />
            </div>
          </div>
          <ul>
            {ingredients.ingredient.map((ingredient) => {
              const isAddingIngredient = isAddingIngredientsList?.ingredient.find(
                (item) => item.name === ingredient.name
              );

              return (
                <li
                  key={ingredient.id}
                  className="flex w-full items-center justify-between border-b border-lightGray px-4 py-2"
                >
                  {ingredient.name}
                  <AddIngredients
                    id={isAddingIngredient?.id}
                    name={ingredient.name || ""}
                    recipeId={id}
                    userId={userData?.id}
                    isDisabled={!!isAddingIngredient}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <Empty text="材料が登録されていません" />
      )}
    </RecipeBottomSection>
  );
};

export default RecipeIngredientsPage;
