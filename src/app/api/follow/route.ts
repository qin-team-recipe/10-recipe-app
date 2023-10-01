import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Recipe, User } from "@prisma/client";

export type FollowList = {
  followed: Pick<User, "id" | "name" | "image_url"> & {
    Recipe: Pick<Recipe, "id" | "created_at" | "image_url" | "description" | "title"> & {
      _count: { Favorite: number };
    };
  };
}[];
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  const data = await prisma.follow.findMany({
    where: {
      following_id: userId || "",
    },
    select: {
      followed: {
        select: {
          id: true,
          name: true,
          image_url: true,
          Recipe: {
            select: {
              id: true,
              created_at: true,
              image_url: true,
              description: true,
              title: true,
              _count: {
                select: {
                  Favorite: true,
                },
              },
            },
            take: 10,
          },
        },
      },
    },
  });
  return NextResponse.json(data);
}
