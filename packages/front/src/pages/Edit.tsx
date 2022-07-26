import React, { FC } from "react";
import { useParams } from "react-router-dom";

export const Edit: FC = () => {
  console.log('edit')
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      <h1>edit</h1>
    </>
  )
}