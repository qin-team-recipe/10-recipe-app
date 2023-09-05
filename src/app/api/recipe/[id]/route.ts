import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Recipe, User } from "@prisma/client";

export type RecipeRelationUser = Pick<Recipe, "id" | "title" | "description" | "image_url" | "instructions"> & {
  _count: { Favorite: number };
} & { user: Pick<User, "id" | "name" | "image_url"> };

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await prisma.recipe.findUnique({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      image_url: true,
      instructions: true,
      _count: {
        select: {
          Favorite: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          image_url: true,
        },
      },
    },
  });
  return NextResponse.json(data);
}
