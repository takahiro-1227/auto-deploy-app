import { FetchMemosQuery } from "@/generated"
import Head from "next/head";
import { FC } from "react";

export interface TopPageProps {
  memos: FetchMemosQuery["memos"];
}

export const TopPage: FC<TopPageProps> = ({ memos }) => {
  return (
    <>
      <Head>
        <title>トップページ</title>
        <meta name="description" content="トップページの説明" />
      </Head>
      <h1>トップページ</h1>
      {memos.length > 0 && (
        <ul>
          {memos.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  )
}