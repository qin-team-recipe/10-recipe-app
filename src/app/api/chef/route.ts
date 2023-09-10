import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export type ChefList = Array<
  Pick<User, "id" | "name" | "description" | "image_url"> & {
    _count: {
      followed: number;
      Recipe: number;
    };
  }
>;

type GetOption = { name: "asc" } | { created_at: "desc" };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sortType = searchParams.get("sort");
  const getOption: GetOption = sortType === "fav" ? { created_at: "desc" } : { name: "asc" };

  const data = await prisma.user.findMany({
    where: {
      is_chef: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      image_url: true,
      _count: {
        select: {
          followed: true,
          Recipe: true,
        },
      },
    },
    orderBy: { ...getOption },
  });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { id, name, description, image_url } = await request.json();
  const user = await prisma.user.create({
    data: {
      id,
      name,
      description,
      image_url,
    },
  });
  return NextResponse.json(user);
}
