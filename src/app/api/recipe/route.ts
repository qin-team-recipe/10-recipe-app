import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.recipe.findMany();
  return NextResponse.json(res);
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
  const data = await prisma.recipe.create({
    data: {
      ...body,
      user_id: "56028e14-9455-41b5-b6b1-eef299b7ef72",
    },
  });
  return NextResponse.json(data);
}
