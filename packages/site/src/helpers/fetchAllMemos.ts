import { FetchMemosQuery, FetchMemosQueryVariables } from '@/generated';
import { gql } from '@apollo/client';
import { fetchQuery } from './fetchQuery';

export const FETCH_MEMOS = gql`
 query fetchMemos {
   memos {
    id
    slug
    title
    content
    createdAt
    updatedAt
   } 
 }
`


export const fetchAllMemos = async () => {
  const { memos } = await fetchQuery<FetchMemosQuery, FetchMemosQueryVariables>({
    query: FETCH_MEMOS,
  }).catch(_error => ({ memos: [] }));

  return memos;
} 

