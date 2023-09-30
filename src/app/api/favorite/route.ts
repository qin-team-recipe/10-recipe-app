import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Recipe } from "@prisma/client";

export type FavoriteList = {
  recipe: Pick<Recipe, "id" | "image_url" | "title"> & {
    _count: { Favorite: number };
  };
}[];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  const data = await prisma.favorite.findMany({
    where: {
      user_id: userId || "",
    },
    select: {
      recipe: {
        select: {
          id: true,
          image_url: true,
          title: true,
          _count: {
            select: {
              Favorite: true,
            },
          },
        },
      },
    },
    orderBy: {
      recipe: {
        created_at: "desc",
      },
    },
  });
  return NextResponse.json(data);
}
