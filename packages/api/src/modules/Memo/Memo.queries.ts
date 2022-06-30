import { Resolvers } from "../../generated";

export const queries: Resolvers["Query"] = {
  memos: async (_parent, _args, { prisma }) => prisma.memo.findMany(),
  memoBySlug: async (_parent, { slug }, { prisma }) => prisma.memo.findUnique({
    where: { slug }
  }), 
}