import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Ingredient } from "@prisma/client";

export type IngredientPutParams = Pick<Ingredient, "name" | "is_checked" | "id">;
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const reqBody: IngredientPutParams = await request.json();
  const { name, is_checked } = reqBody;

  const data = await prisma.ingredient.update({
    where: {
      id: params.id,
    },
    data: {
      name,
      is_checked,
    },
  });
  return NextResponse.json(data);
}
