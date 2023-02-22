import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styledd from "styled-components";
import Button from "./Button";
import useInput from "../hooks/useInput";

import { addTodo } from "../api/todoApi";
import { useMutation, useQueryClient } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const client = useQueryClient();
  const createTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // mutation 성공 후 처리할 작업
      alert("Todo created successfully");
      client.invalidateQueries("todos");
      navigate("/");
    },
    onError: (error) => {
      // mutation 실패 후 처리할 작업
      alert("Failed to create todo:", error.message);
      navigate("/");
    },
  });

  const [name, textNameOnChangeHandler] = useInput(5);
  const [title, textTitleOnChangeHandler] = useInput(50);
  const [content, textContentOnChangeHandler] = useInput(200);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !title.trim() || !content.trim()) {
      alert("빈칸 채우세요");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      name,
      title,
      content,
      status: "active",
    };

    createTodoMutation.mutate(newTodo);
  };

  return (
    <Stform onSubmit={onSubmitHandler}>
      <Stdiv>
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="작성자(5자 이내)"
            id="name"
            value={name}
            onChange={textNameOnChangeHandler}
            variant="filled"
            inputProps={{ style: { color: "var(--color-text)" } }}
            InputLabelProps={{ style: { color: "var(--color-text)" } }}
          />
        </Box>
      </Stdiv>
      <Stdiv>
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="제목(50자 이내)"
            id="title"
            value={title}
            onChange={textTitleOnChangeHandler}
            variant="filled"
            inputProps={{ style: { color: "var(--color-text)" } }}
            InputLabelProps={{ style: { color: "var(--color-text)" } }}
          />
        </Box>
      </Stdiv>
      <Stdiv>
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="내용(200자 이내)"
            id="content"
            value={content}
            onChange={textContentOnChangeHandler}
            variant="filled"
            inputProps={{ style: { color: "var(--color-text)" } }}
            InputLabelProps={{ style: { color: "var(--color-text)" } }}
          />
        </Box>
      </Stdiv>
      <div style={{ textAlign: "center" }}>
        <Button>등록</Button>
      </div>
    </Stform>
  );
}

const Stform = styledd.form`
    width:100%
`;
const Stdiv = styledd.div`
  color: var(--color-text);
  margin: 20px;
  padding: 20px;
  width: 100%
`;
