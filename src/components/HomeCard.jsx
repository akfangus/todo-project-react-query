import React from "react";
import styled from "styled-components";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function HomeCard({ title, linkto }) {
  return (
    <Card>
      <h1>{title}</h1>
      <Link to={linkto}>
        <Button>
          <EastSharpIcon />
        </Button>
      </Link>
    </Card>
  );
}

const Card = styled.div`
  text-align: center;
  /* background-color: #ffffff; */
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 30px;
  width: 250px;
  height: 300px;
`;

// const Button = styled.button`
//   width: 100px;
//   height: 40px;
//   text-align: center;
//   border: none;
//   outline: none;
//   background-color: #007bff;
//   color: #ffffff;
//   font-size: 14px;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     transform: scale(1.2);
//     background-color: tomato;
//   }
// `;
