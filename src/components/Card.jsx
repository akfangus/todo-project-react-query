import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Card({ todo }) {
  const navigate = useNavigate();
  const { id, name, title } = todo;
  return (
    <Stdiv
      onClick={() => {
        navigate(`/works/${id}`);
      }}
    >
      <h4> 제목 : {title} &nbsp;&nbsp;</h4>
      <h4 style={{ marginLeft: "auto" }}> 작성자 : {name} &nbsp;</h4>
    </Stdiv>
  );
}

const Stdiv = styled.div`
  display: flex;
  width: 100%;
`;
