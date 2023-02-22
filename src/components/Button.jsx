import React, { Children } from "react";
import styled from "styled-components";

export default function Button(props) {
  return <Buttons {...props}>{props.children}</Buttons>;
}

const Buttons = styled.button`
  width: 100px;
  height: 40px;
  text-align: center;
  border: none;
  outline: none;
  background-color: #007bff;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
    background-color: tomato;
  }
`;
