import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await prisma.ingredients.findUnique({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}
