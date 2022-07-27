import { Resolvers } from "../../generated";

export const mutations: Resolvers["Mutation"] = {
    createMemo: async (_parent, { slug, title, content }, { prisma }) => await prisma.memo.create({
      data: { slug, title, content }
    }),
    updateMemo: async (_parent, { id, slug, title, content}, { prisma }) => await prisma.memo.update({
      where: {
        id
      },
      data: {
        slug,
        title,
        content,
        updatedAt: new Date(),
      }
    })
  }