import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Favorite } from "@prisma/client";

export type FavoriteType = Pick<Favorite, "user_id" | "recipe_id"> | null;
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const targetId = searchParams.get("id");

  const data = await prisma.favorite.findUnique({
    where: {
      user_id_recipe_id: {
        user_id: targetId || "",
        recipe_id: params.id,
      },
    },
    select: {
      user_id: true,
      recipe_id: true,
    },
  });
  return NextResponse.json(data);
}

// POSTの際に使う型
export type PostFavoriteParams = Pick<Favorite, "user_id">;
export async function POST(request: Request, { params }: { params: { id: string } }) {
  const reqBody: PostFavoriteParams = await request.json();
  const { user_id } = reqBody;

  const data = await prisma.favorite.upsert({
    where: {
      user_id_recipe_id: {
        user_id: user_id,
        recipe_id: params.id,
      },
    },
    update: {
      user_id: user_id,
      recipe_id: params.id,
    },
    create: {
      user_id: user_id,
      recipe_id: params.id,
    },
  });
  return NextResponse.json(data);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const targetId = searchParams.get("id");

  const data = await prisma.favorite.delete({
    where: {
      user_id_recipe_id: {
        user_id: targetId || "",
        recipe_id: params.id,
      },
    },
  });
  return NextResponse.json(data);
}
