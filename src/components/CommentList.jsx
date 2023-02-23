import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTodos } from "../api/todoApi";
import styled from "styled-components";

export default function CommentList() {
  const { id } = useParams();
  const { isLoading, isError, data: todos } = useQuery("todos", getTodos);
  const target = todos?.filter((todo) => todo.id === id)[0]["comments"];

  return (
    <ScrollableDiv>
      {target?.map((item) => {
        return (
          <h5>
            {item.title} : {item.content}
          </h5>
        );
      })}
    </ScrollableDiv>
  );
}

const ScrollableDiv = styled.div`
  margin-top: 30px;
  /* 스크롤바를 추가할 div 태그에 적용할 스타일 */
  overflow: auto; /* 스크롤바 표시를 위해 overflow 속성 값을 auto로 설정 */
  height: 80%; /* 스크롤바 영역의 높이를 지정 */

  /* 스크롤바 스타일 설정 */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
    height: 10px; /* 스크롤바의 높이 */
  }

  &::-webkit-scrollbar-thumb {
    background: gray; /* 스크롤바 색상 */
    border-radius: 5px; /* 스크롤바 모서리의 반경 */
  }
`;
