import React, { FC } from "react"
import { gql } from '@apollo/client';
import { useGetMemosQuery } from "../generated";
import { NODE_ENV } from "../settings";

export const GET_MEMOS = gql`
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
`
export const TopPage: FC = () => {
  const { loading, error, data } = useGetMemosQuery();
  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
   console.error(error);
   return <p>エラーが発生しました</p>
  }

  if (!data) {
    return <p>データが取得できませんでした</p>
  }

  return (
    <>
      <div>topPage</div>
      <ul>
        {data.memos.map(({id, title, slug}) => (
          <li key={id}>
            <a href={`/edit/${slug}`}>{title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}