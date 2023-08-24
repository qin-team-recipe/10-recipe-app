import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await prisma.recipe.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message, message: "エラーが発生しました。" });
  }
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
  try {
    const data = await prisma.recipe.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message, message: "エラーが発生しました。" });
  }
}
