import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Follow } from "@prisma/client";

export type FollowType = Pick<Follow, "followed_id" | "following_id"> | null;
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const targetId = searchParams.get("id");

  const data = await prisma.follow.findUnique({
    where: {
      following_id_followed_id: {
        following_id: params.id,
        followed_id: targetId || "",
      },
    },
    select: {
      following_id: true,
      followed_id: true,
    },
  });
  return NextResponse.json(data);
}

// POSTの際に使う型
export type PostFollowParams = Pick<Follow, "followed_id">;
export async function POST(request: Request, { params }: { params: { id: string } }) {
  const reqBody: PostFollowParams = await request.json();
  const { followed_id } = reqBody;

  const data = await prisma.follow.upsert({
    where: {
      following_id_followed_id: {
        following_id: params.id,
        followed_id: followed_id,
      },
    },
    update: {
      following_id: params.id,
      followed_id: followed_id,
    },
    create: {
      following_id: params.id,
      followed_id: followed_id,
    },
  });
  return NextResponse.json(data);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const targetId = searchParams.get("id");

  const data = await prisma.follow.delete({
    where: {
      following_id_followed_id: {
        following_id: params.id,
        followed_id: targetId || "",
      },
    },
  });
  return NextResponse.json(data);
}
