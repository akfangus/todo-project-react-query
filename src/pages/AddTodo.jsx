import React from "react";
import Form from "../components/Form";
import styled from "styled-components";

export default function AddTodo() {
  return (
    <Stdiv>
      할일 기록하기
      <Form />
    </Stdiv>
  );
}

const Stdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
