import React, { useState } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { addComments, getTodos } from "../api/todoApi";
import useInput from "../hooks/useInput";
import { useParams } from "react-router-dom";

export default function CommentModalContent() {
  const { id } = useParams();
  const { isLoading, isError, data: todos } = useQuery("todos", getTodos);
  const target = todos?.filter((todo) => todo.id === id)[0];
  const [title, setTitle, tempTitle] = useInput(10);
  const [content, setContent, tempContent] = useInput(100);

  const client = useQueryClient();
  const addCommentMutation = useMutation(addComments, {
    onSettled: () => client.invalidateQueries("todos"),
  });
  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      target: id,
      comments: [...(target.comments || []), { title, content }],
    };
    addCommentMutation.mutate(newTodo);
    tempTitle("");
    tempContent("");
  }
  return (
    <>
      <CommentList />
      <Footer>
        <CommentModalForm onSubmit={handleSubmit}>
          <CommentInput
            type="text"
            placeholder="이름"
            value={title}
            onChange={setTitle}
          />
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요"
            value={content}
            onChange={setContent}
          />
          <SubmitButton type="submit">완료</SubmitButton>
        </CommentModalForm>
      </Footer>
    </>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 80%;
`;
const CommentModalForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  bottom: 0;
  left: 0;
`;

const CommentInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
