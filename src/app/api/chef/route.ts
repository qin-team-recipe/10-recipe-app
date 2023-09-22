import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

// GETの際に使う型
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

// CREATEの際に使う型（TODO:schemaでdescriptionとimage_urlが必須になってしまっているので修正したい）
export type CreateUserPostParams = Pick<User, "id" | "name" | "description" | "image_url">;

export async function POST(request: Request) {
  const reqBody: CreateUserPostParams = await request.json();
  const { id, name, description, image_url } = reqBody;
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

// UPDATEの際に使う型
export type UpdateUserPostParams = Pick<User, "id" | "name" | "description" | "image_url"> & { link?: string[] };

export async function PUT(request: Request) {
  const reqBody: UpdateUserPostParams = await request.json();
  const { id, name, description, image_url, link } = reqBody;
  const linkData = link ? { Link: { create: link?.map((url) => ({ url, id: crypto.randomUUID() })) } } : undefined;
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      image_url,
      ...linkData,
    },
  });
  return NextResponse.json(user);
}
