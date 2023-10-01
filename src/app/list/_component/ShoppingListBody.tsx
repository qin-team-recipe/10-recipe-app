"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { IngredientPutParams } from "@/app/api/ingredient/[id]/route";
import { IngredientCreateParams, IngredientsList } from "@/app/api/ingredients/route";
import { ShoppingListHeader } from "@/app/list/_component/ShoppingListHeader";
import { ShoppingListItem } from "@/app/list/_component/ShoppingListItem";

type ShoppingListBodyProps = {
  userId?: string;
  shoppingList: IngredientsList;
};

type FieldsStatus = { key: string; id: string; name: string | null; is_checked: boolean }[];

export const ShoppingListBody: React.FC<ShoppingListBodyProps> = (props) => {
  const generateDefaultFields: FieldsStatus = props.shoppingList
    .map((item) => item.ingredient.map((v) => ({ key: item.id, id: v.id, name: v.name, is_checked: !!v.is_checked })))
    .flat();
  const [fields, setFields] = useState(generateDefaultFields);
  const router = useRouter();

  const generateId = () => crypto.randomUUID();

  const addField = useCallback(
    (key: string) => {
      if (!props.userId) {
        router.push("/signUp");
        return;
      }
      setFields((prev) => [...prev, { key, id: generateId(), name: "", is_checked: false }]);
    },
    [router, props.userId]
  );

  const onBlur = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      const isSelfIngredients = fields.find((field) => field.key === props.userId);
      if (e.target.name === props.userId && !isSelfIngredients) {
        const newSelfIngredients: IngredientCreateParams = {
          recipe_id: null,
          user_id: props.userId,
          ingredient: [e.target.value],
          is_shopping_list: true,
        };
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newSelfIngredients),
        });
      } else {
        const updateIngredient: IngredientPutParams = {
          id: e.target.id,
          is_checked: false,
          name: e.target.value,
        };
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredient/${e.target.name}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateIngredient),
        });
      }
    },
    [fields, props.userId]
  );

  return (
    <div>
      <ShoppingListHeader title="買い物リスト" onAddFunc={() => addField(props.userId || "")} />
      {fields
        .filter((field) => field.key === props.userId)
        .map((field) => (
          <ShoppingListItem
            key={field.id}
            onBlur={onBlur}
            id={field.id}
            name={props.userId || ""}
            value={field.name || ""}
          />
        ))}
      {props.shoppingList.map((item) => {
        return (
          <div key={item.id}>
            <ShoppingListHeader title={item.recipe.title} userId={props.userId} onAddFunc={() => addField(item.id)} />
            {fields
              .filter((field) => field.key === item.id)
              .map((ingredientItem) => (
                <ShoppingListItem
                  key={ingredientItem.id}
                  id={ingredientItem.id}
                  name={item.id}
                  value={ingredientItem.name || ""}
                  isChecked={!!ingredientItem.is_checked}
                  onBlur={onBlur}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
};
