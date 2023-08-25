import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const data = await prisma.recipe.findUnique({
    where: {
      id: id as string,
    },
  });
  return NextResponse.json(data);
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { title, description, image_url, status, instruction } = await request.json();
  const body = {
    title,
    description,
    image_url,
    status,
    instruction,
  };
  const data = await prisma.recipe.update({
    where: {
      id: params.id,
    },
    data: {
      ...body,
    },
  });
  return NextResponse.json(data);
}

export async function DELETE({ params }: { params: { id: string } }) {
  const data = await prisma.recipe.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}
