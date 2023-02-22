import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modules/modalSlice";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { editTodo } from "../api/todoApi";

export default function Modal({ btnToggle, id }) {
  const { toggle, data } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

  //   const [content, setContent] = useState(data.content);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const handelCloseModal = () => {
    btnToggle();
    setTitle("");
    setContent("");
    dispatch(closeModal());
  };

  //submit시 수정
  const client = useQueryClient();
  const EditTodoMutaion = useMutation(editTodo, {
    onSuccess: () => {
      alert("Todo created successfully!!!");
      client.invalidateQueries("todos");
      handelCloseModal();
    },
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("빈칸 채우세요");
      return;
    }
    EditTodoMutaion.mutate({
      target: id,
      title,
      content,
    });
  };

  if (!toggle) {
    console.log("null!");
    return null;
  }
  return (
    <Container>
      <Background>
        <ModalBlock>
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
            ></input>
            <input
              type="text"
              value={content}
              onChange={contentChangeHandler}
            ></input>
            <button>OK</button>
          </form>
          <button onClick={handelCloseModal}>Close</button>
        </ModalBlock>
      </Background>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  color: black;
  width: 700px;
  box-shadow: 1px 1px 1px 1px gray;
  margin: 100px;
  text-align: center;
`;
