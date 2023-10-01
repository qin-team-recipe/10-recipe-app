import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Ingredients } from "@prisma/client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await prisma.ingredients.findUnique({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}

export type IngredientUpsertParams = Pick<Ingredients, "user_id" | "recipe_id" | "is_shopping_list"> & {
  name: string;
};
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const reqBody: IngredientUpsertParams = await request.json();
  const { user_id, recipe_id, is_shopping_list, name } = reqBody;
  const data = await prisma.ingredients.upsert({
    where: {
      id: params.id,
    },
    update: {
      ingredient: {
        create: {
          id: crypto.randomUUID(),
          name,
        },
      },
    },
    create: {
      user_id,
      recipe_id,
      is_shopping_list,
      ingredient: {
        create: {
          id: crypto.randomUUID(),
          name,
        },
      },
    },
  });
  return NextResponse.json(data);
}
