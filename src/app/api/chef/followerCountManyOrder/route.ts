import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

// 直近三日間で獲得したフォロワー数が多い順に10人までシェフを取得する
export async function GET() {
  // ３日前の日付
  // const threeDaysAgo = new Date(new Date().setDate(new Date().getDate() - 3));

  const data = await prisma.user.findMany({
    where: {
      is_chef: true,
    },
    select: {
      id: true,
      name: true,
      image_url: true,
      // _count: {
      //   select: {
      //     followed: {
      //       where: {
      //         created_at: {
      //           gt: threeDaysAgo,
      //         },
      //       },
      //     },
      //   },
      // },
    },
    // orderBy: {
    //   followed: {
    //     // _count: "desc",
    //     // where: {
    //     //   created_at: {
    //     //     gt: formattedSupabaseThreeDaysAgo,
    //     //   },
    //     // },
    //   },
    // },
    take: 10,
  });
  return NextResponse.json(data);
}
