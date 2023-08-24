import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const res = await prisma.recipe.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json(res);
  } else {
    const res = await prisma.recipe.findMany();
    return NextResponse.json(res);
  }
}
export async function POST(req: NextRequest) {
  const { title, description, image_url, status, instruction } = await req.json();
  const body = {
    title,
    description,
    image_url,
    status,
    instruction,
  };
  try {
    const data = await prisma.recipe.create({
      data: {
        ...body,
        user_id: "56028e14-9455-41b5-b6b1-eef299b7ef72",
      },
    });
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message, message: "エラーが発生しました。" });
  }
}
