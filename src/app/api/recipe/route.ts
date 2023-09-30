import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Ingredients, Recipe } from "@prisma/client";

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

// POSTの際に使う型
export type CreateRecipePostParams = Omit<Recipe, "created_at" | "updated_at" | "id" | "status"> &
  Pick<Ingredients, "quantity"> & { ingredient?: string[] } & { link: string[] };

export async function POST(request: Request) {
  const reqBody: CreateRecipePostParams = await request.json();
  const { title, user_id, description, image_url, instructions, quantity, ingredient, link } = reqBody;
  const recipeId = crypto.randomUUID();
  const ingredientsId = crypto.randomUUID();
  const recipe = await prisma.recipe.create({
    data: {
      id: recipeId,
      title,
      user_id,
      status: "PRIVATE", // デフォルト値
      description,
      image_url,
      instructions,
      Ingredients: {
        create: [
          {
            id: ingredientsId,
            user_id,
            quantity,
            ingredient: {
              create: ingredient?.map((ingredient) => ({ id: crypto.randomUUID(), name: ingredient })),
            },
          },
        ],
      },
      Link: {
        create: link?.map((url) => ({ url, id: crypto.randomUUID() })),
      },
    },
  });
  return NextResponse.json(recipe);
}
