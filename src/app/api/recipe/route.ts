import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Recipe } from "@prisma/client";

export type RecipeList = Array<
  Pick<Recipe, "id" | "title" | "description" | "image_url"> & {
    _count: {
      Favorite: number;
    };
  }
>;

type GetOption = { Favorite: { _count: "desc" } } | { created_at: "desc" };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const sortType = searchParams.get("sort");
  const getOption: GetOption = sortType === "fav" ? { Favorite: { _count: "desc" } } : { created_at: "desc" };

  const data = await prisma.recipe.findMany({
    where: {
      user_id: id || undefined,
    },
    select: {
      id: true,
      title: true,
      description: true,
      image_url: true,
      _count: {
        select: {
          Favorite: true,
        },
      },
    },
    orderBy: {
      ...getOption,
    },
  });
  return NextResponse.json(data);
}
