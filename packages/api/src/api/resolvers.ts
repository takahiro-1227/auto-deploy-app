import { Resolvers } from "../generated";
import { queries as memoQueries, mutations as memoMutations } from "../modules/Memo";

export const resolvers: Resolvers = {
  Query: {
    ...memoQueries
  },
  Mutation: {
    ...memoMutations
  },
}