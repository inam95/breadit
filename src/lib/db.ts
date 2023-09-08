import { PrismaClient } from "@prisma/client";

const globalFroPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalFroPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalFroPrisma.prisma;
