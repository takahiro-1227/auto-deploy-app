import { gql } from "@apollo/client"
import React from "react"

export const CREATE_MEMO = gql`
mutation createMemo($slug: String!, $title: String!, $content: String!) {
    createMemo(slug: $slug, title: $title, content: $content) {
      id
      slug
      title
      content
      createdAt
      updatedAt
    }
  }
`

export const Create = () => {
  return (
    <div>create</div>
  )
}
