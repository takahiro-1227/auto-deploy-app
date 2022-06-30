import { gql } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMemoBySlugLazyQuery, useUpdateMemoMutation } from "../generated";
import { Button, TextField, TextFieldProps } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';

export const GET_MEMO_BY_SLUG = gql`
  query getMemoBySlug($slug: String!) {
    memoBySlug(slug: $slug) {
      id
      slug
      title
      content
      createdAt
      updatedAt
    }
  }
` 

export const UPDATE_MEMO = gql`
  mutation updateMemo($id: Int!, $slug: String!, $title: String!, $content: String!) {
    updateMemo(id: $id, slug: $slug, title: $title, content: $content) {
      id
      slug
      title
      content
      createdAt
      updatedAt
    }
  }
`

export const Edit: FC = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  const { slug: existingSlug } = useParams();
  const [getMemoBySlug, { data, loading, error }] = useGetMemoBySlugLazyQuery();

  useEffect(() => {
    if (existingSlug) {
      getMemoBySlug({ variables: { slug: existingSlug } });
    }
  }, [existingSlug]);

  useEffect(() => {
    if (data) {
      setTitle(data.memoBySlug.title);
      setSlug(data.memoBySlug.slug);
      setContent(data.memoBySlug.content);
    }
  }, [data]);

  const navigate = useNavigate();

  const [updateMemo] = useUpdateMemoMutation();

  const textFieldProps: TextFieldProps = {
    fullWidth: true,
    margin: 'normal',
  }

  
  if (loading) {
    return <p>loading...</p>
  }
  
  if (error) {
    console.error(error);
    return <p>エラーが発生しました</p>;
  }
  
  if (!data) {
    return <p>データが取得できませんでした。</p>;
  }
  
  const handleSaveClick = async () => {
    if (saving) {
      return;
    }
    if (!title || !slug || !content) {
      alert('まだ入力していない項目があります。')
    }

    setSaving(true);

    await updateMemo({
      variables: {
        id: data.memoBySlug.id,
        title,
        slug,
        content,
      }
    }).then(() => {
      window.alert('メモを更新しました');
      navigate('/', { replace: true });
    }).catch(error => {
      window.alert('メモの更新に失敗しました');
      console.error(error);
    }).finally(() => {
      setSaving(false);
    })
  } 
  
  return (
    <>
      <h1>edit</h1>
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