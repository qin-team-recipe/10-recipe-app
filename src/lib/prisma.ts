/**
 *
 * 開発環境の場合、HMRが走るたびにprismaインスタンスが生成されてしまうので
 * アプリケーション全体でPrismaClientが1つしか生成されないようにする
 *
 */

import { PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal extends Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
