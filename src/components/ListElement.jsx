import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import Card from "./Card";
export default function ListElement({ todo, onDelete, handleChange }) {
  const { id, status } = todo;

  return (
    <Stli>
      <input
        type="checkbox"
        id="checkbox"
        value={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <Card todo={todo} />
      <IconButton
        onClick={() => onDelete(id)}
        style={{
          color: "var(--color-text)",
          marginLeft: "auto",
          width: "50px",
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </Stli>
  );
}

const Stli = styled.li`
  display: flex;
  list-style: none;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid var(--color-grey);
  margin: 10px;
  border-radius: 10px;
  max-width: 1000px;
  min-width: 800px;
`;
