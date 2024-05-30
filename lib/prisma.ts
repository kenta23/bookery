//@ts-nocheck

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma: PrismaClient =
  global.prisma ?? new PrismaClient({ log: ["query", "error", "warn"] }).$extends(withAccelerate());
if (process.env.NODE_ENV === "production") {
  global.prisma = prisma;
}