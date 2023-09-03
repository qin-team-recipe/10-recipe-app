import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export type Chef = Pick<User, "id" | "name" | "description" | "image_url"> & {
  _count: {
    followed: number;
    Recipe: number;
  };
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const data = await prisma.user.findUnique({
    where: {
      id: params.id,
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
  });
  return NextResponse.json(data);
}
