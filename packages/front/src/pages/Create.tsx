import { gql } from "@apollo/client"
import React, { FC, useState } from "react"
import { useCreateMemoMutation } from "../generated"
import { Button, TextField, TextFieldProps } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';

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

export const Create: FC = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const [createMemo] = useCreateMemoMutation();
  const textFieldProps: TextFieldProps = {
    fullWidth: true,
    margin: 'normal',
  }

  const handleSaveClick = async () => {
    if (saving) {
      return;
    }
    if (!title || !slug || !content) {
      alert('まだ入力していない項目があります。')
    }

    setSaving(true);

    await createMemo({
      variables: {
        title,
        slug,
        content,
      }
    }).then(() => {
      window.alert('メモを新規作成しました');
    }).catch(error => {
      window.alert('メモの作成に失敗しました');
      console.error(error);
    }).finally(() => {
      setSaving(false);
      navigate('/', {replace: true});
    })
  }

  return (
    <>
      <p>create</p>
      <Link to='..'>トップに戻る</Link>
      <div>
        <TextField label="タイトル" value={title} onChange={event => setTitle(event.currentTarget.value)} {...textFieldProps}/>
        <TextField label="スラッグ" value={slug} onChange={event => setSlug(event.currentTarget.value)} {...textFieldProps}/>
        <TextField label="本文" value={content} onChange={event => setContent(event.currentTarget.value)} multiline minRows={6} {...textFieldProps}/>
        <Button variant="contained" onClick={handleSaveClick}>保存</Button>
      </div>
    </>
  )
}
