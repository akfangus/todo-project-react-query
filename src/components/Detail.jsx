import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos } from "../api/todoApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modules/modalSlice";
import Modal from "./Modal";

export default function Detail() {
  const { id } = useParams();
  const { isLoading, isError, data: todos } = useQuery("todos", getTodos);
  const target = todos?.filter((todo) => todo.id === id)[0];
  console.log("come");

  //이전으로
  const navigate = useNavigate();
  const btnGoBackHandler = () => {
    navigate("/works");
  };

  //모달창
  const [isModalOpen, setIsModalOpen] = useState(false);
  //

  const dispatch = useDispatch();
  const toggleChange = () => {
    setIsModalOpen((prev) => !prev);
  };
  const btnToggleModal = () => {
    toggleChange();
    dispatch(openModal({ title: target.title, content: target.content }));
  };

  //   const btnToggleModal = () => ;

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{isError}</p>;
  return (
    <Stdiv>
      <StDiv1>
        id : {target.id}
        <Button onClick={btnGoBackHandler}>이전으로</Button>
      </StDiv1>
      <Sth1>{target.title}</Sth1>
      <Stp>{target.content}</Stp>
      <StDiv2>
        <Button onClick={btnToggleModal}>수정하기</Button>
      </StDiv2>
      {/* <Modal /> */}
      {
        isModalOpen ? <Modal btnToggle={toggleChange} /> : null //기계역할
      }
    </Stdiv>
  );
}

const Stdiv = styled.div`
  margin: 30px;
  padding: 15px;
`;

const StDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Sth1 = styled.h1``;
const Stp = styled.p`
  text-align: center;
`;
