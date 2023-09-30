import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Ingredients, Recipe, User } from "@prisma/client";

export type RecipeItem = Omit<Recipe, "created_at" | "updated_at"> & {
  Ingredients: { quantity: number; ingredient: { id: string; name: string }[] }[];
} & { Link: { id: string; url: string }[] } & { user: Pick<User, "id" | "name" | "image_url"> } & {
  _count: { Favorite: number };
};

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
      status: true,
      user_id: true,
      Ingredients: {
        select: {
          quantity: true,
          ingredient: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      Link: {
        select: {
          id: true,
          url: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          image_url: true,
        },
      },
      _count: {
        select: {
          Favorite: true,
        },
      },
    },
  });
  return NextResponse.json(data);
}

// POSTの際に使う型
export type UpdateRecipePostParams = Omit<Recipe, "created_at" | "updated_at" | "id" | "status"> &
  Pick<Ingredients, "quantity"> & { ingredient?: string[] } & { link: string[] };

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const reqBody: UpdateRecipePostParams = await request.json();
  const { title, description, image_url, instructions, ingredient, link, user_id, quantity } = reqBody;
  const ingredientsId = crypto.randomUUID();
  const recipe = await prisma.recipe.update({
    where: {
      id: params.id,
    },
    data: {
      title,
      description,
      image_url,
      instructions,
      Ingredients: {
        deleteMany: {},
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
        deleteMany: {},
        create: link?.map((url) => ({ url, id: crypto.randomUUID() })),
      },
    },
  });
  return NextResponse.json(recipe);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const data = await prisma.recipe.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}
