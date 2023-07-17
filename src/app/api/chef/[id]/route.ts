import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const data = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}
