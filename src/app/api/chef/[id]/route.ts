import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { Link, User } from "@prisma/client";

export type Chef = Pick<User, "id" | "name" | "description" | "image_url"> & {
  _count: {
    followed: number;
    Recipe: number;
  } & { Link: Pick<Link, "id" | "url">[] };
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
      Link: {
        select: {
          id: true,
          url: true,
          user_id: true,
        },
      },
    },
  });
  console.log(data);
  return NextResponse.json(data);
}
