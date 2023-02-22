import React from "react";
import HomeCard from "../components/HomeCard";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <Stdiv>
      홈화면 입니다.
      <StcardDiv>
        <HomeCard title="만들기" linkto="works/addtodo" />
        <HomeCard title="Todo리스트" linkto="works" />
      </StcardDiv>
    </Stdiv>
  );
}

const Stdiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const StcardDiv = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  height: 300px;
  max-width: 1400px;
  min-width: 1000px;
  min-height: 400px;
`;
