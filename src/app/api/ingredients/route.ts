import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Ingredient, Ingredients } from "@prisma/client";

export type IngredientsList = Array<
  Pick<Ingredients, "id" | "quantity" | "step" | "user_id" | "is_shopping_list"> & {
    ingredient: Pick<Ingredient, "id" | "name" | "step" | "is_checked">[];
  } & { recipe: { title: string } }
>;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const recipe_id = searchParams.get("recipe_id");
  const user_id = searchParams.get("user_id");

  const data = await prisma.ingredients.findMany({
    where: {
      recipe_id: recipe_id || undefined,
      user_id: user_id || undefined,
    },
    select: {
      id: true,
      quantity: true,
      step: true,
      user_id: true,
      is_shopping_list: true,
      recipe: {
        select: {
          title: true,
        },
      },
      ingredient: {
        select: {
          id: true,
          name: true,
          step: true,
          is_checked: true,
        },
      },
    },
  });
  return NextResponse.json(data);
}

export type IngredientCreateParams = Pick<Ingredients, "user_id" | "recipe_id" | "is_shopping_list"> & {
  ingredient: string[];
};
export async function POST(request: Request) {
  const reqBody: IngredientCreateParams = await request.json();
  const { user_id, recipe_id, ingredient, is_shopping_list } = reqBody;

  const data = await prisma.ingredients.create({
    data: {
      user_id,
      recipe_id,
      is_shopping_list,
      ingredient: {
        create: ingredient.map((item) => ({ id: crypto.randomUUID(), name: item })),
      },
    },
  });
  return NextResponse.json(data);
}
