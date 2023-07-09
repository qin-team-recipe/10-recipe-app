import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const data = await prisma.chef.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(data);
}
