import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Memo = {
  __typename?: 'Memo';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMemo: Memo;
  updateMemo: Memo;
};


export type MutationCreateMemoArgs = {
  content: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateMemoArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  memoBySlug: Memo;
  memos: Array<Memo>;
};


export type QueryMemoBySlugArgs = {
  slug: Scalars['String'];
};


export const GetMemosDocument = gql`
    query getMemos {
  memos {
    id
    slug
    title
    content
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetMemosQuery__
 *
 * To run a query within a React component, call `useGetMemosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMemosQuery(baseOptions?: Apollo.QueryHookOptions<GetMemosQuery, GetMemosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemosQuery, GetMemosQueryVariables>(GetMemosDocument, options);
      }
export function useGetMemosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemosQuery, GetMemosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemosQuery, GetMemosQueryVariables>(GetMemosDocument, options);
        }
export type GetMemosQueryHookResult = ReturnType<typeof useGetMemosQuery>;
export type GetMemosLazyQueryHookResult = ReturnType<typeof useGetMemosLazyQuery>;
export type GetMemosQueryResult = Apollo.QueryResult<GetMemosQuery, GetMemosQueryVariables>;
export type GetMemosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemosQuery = { __typename?: 'Query', memos: Array<{ __typename?: 'Memo', id: number, slug: string, title: string, content: string, createdAt: string, updatedAt: string }> };