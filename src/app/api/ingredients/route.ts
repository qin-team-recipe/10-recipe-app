import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Ingredient, Ingredients } from "@prisma/client";

export type IngredientsList = Array<
  Pick<Ingredients, "id" | "quantity" | "step"> & {
    ingredient: Pick<Ingredient, "id" | "name" | "step" | "is_checked">[];
  }
>;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const recipe_id = searchParams.get("recipe_id");

  const data = await prisma.ingredients.findMany({
    where: {
      recipe_id: recipe_id || undefined,
    },
    select: {
      id: true,
      quantity: true,
      step: true,
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
