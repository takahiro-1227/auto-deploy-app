export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type FetchMemosQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMemosQuery = { __typename?: 'Query', memos: Array<{ __typename?: 'Memo', id: number, slug: string, title: string, content: string, createdAt: string, updatedAt: string }> };
