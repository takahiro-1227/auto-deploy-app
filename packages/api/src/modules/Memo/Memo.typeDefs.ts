import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Memo {
    id: Int!
    slug: String!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    memos: [Memo]!
    memoBySlug(slug: String!): Memo!
  }

  type Mutation {
    createMemo(slug: String!, title: String!, content: String!): Memo!
    updateMemo(id: Int!, slug: String, title: String, content: String): Memo!
  }
`