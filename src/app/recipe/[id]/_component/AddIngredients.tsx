"use client";

import { Icon } from "@/components/Icon/Icon";
import { IngredientUpsertParams } from "@/app/api/ingredients/[id]/route";

type AddIngredientsProps = {
  id?: string;
  name: string;
  userId?: string;
  recipeId: string;
  isDisabled?: boolean;
};

export const AddIngredients: React.FC<AddIngredientsProps> = (props) => {
  const handleClick = async () => {
    if (!props.userId) return;

    const ingredientsPost: IngredientUpsertParams = {
      recipe_id: props.recipeId,
      user_id: props.userId,
      name: props.name,
      is_shopping_list: true,
    };

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredientsPost),
    }).then((res) => {
      if (res.ok) {
        alert("ショッピングリストに材料を追加しました");
      } else {
        alert("ショッピングリストに材料を追加できませんでした");
      }
    });
  };

  return (
    <button disabled={props.isDisabled} className={props.isDisabled ? "opacity-30" : ""} onClick={handleClick}>
      <Icon type="ShoppingCartPlus" color="gray" />
    </button>
  );
};
