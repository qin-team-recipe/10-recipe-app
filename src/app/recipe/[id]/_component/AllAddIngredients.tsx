"use client";

import cc from "classcat";

import { Icon } from "@/components/Icon/Icon";
import { IngredientCreateParams } from "@/app/api/ingredients/route";

type AllAddIngredientsProps = {
  ingredient: string[];
  userId?: string;
  recipeId: string;
  isDisabled?: boolean;
};

export const AllAddIngredients: React.FC<AllAddIngredientsProps> = (props) => {
  const clickHandler = async () => {
    if (!props.ingredient.length || !props.userId) return;

    const ingredientsPost: IngredientCreateParams = {
      recipe_id: props.recipeId,
      user_id: props.userId,
      ingredient: props.ingredient,
      is_shopping_list: true,
    };

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredientsPost),
    }).then((res) => {
      if (res.ok) {
        alert("ショッピングリストに全ての材料を追加しました");
      } else {
        alert("ショッピングリストに材料を追加できませんでした");
      }
    });
  };

  const buttonClass = cc([
    "flex items-center",
    {
      "opacity-30": props.isDisabled,
    },
  ]);

  return (
    <button className={buttonClass} onClick={clickHandler} disabled={props.isDisabled}>
      <Icon type="ShoppingCartPlus" color="gray" />
      <p className="text-gray">{props.isDisabled ? "買い物リストに追加済み" : "まとめて買い物リストに追加"}</p>
    </button>
  );
};
