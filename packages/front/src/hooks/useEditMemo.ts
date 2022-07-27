import { GetMemoBySlugQuery, useCreateMemoMutation } from "../generated";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useEditMemo = (data?: GetMemoBySlugQuery) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const [createMemo] = useCreateMemoMutation();
}