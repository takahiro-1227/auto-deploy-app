import { PrismaClient } from "../generated/client";

export interface Context {
  prisma: PrismaClient
}

const prisma = new PrismaClient();

export const context: Context = {
  prisma
}