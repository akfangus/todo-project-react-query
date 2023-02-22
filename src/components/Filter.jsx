import React from "react";
import styled from "styled-components";

export default function Filter({ filters, filter, onFilterChange }) {
  return (
    <Stdiv>
      <Stul>
        {filters.map((value, index) => (
          <li key={index}>
            <Stbtn onClick={() => onFilterChange(value)}>{value}</Stbtn>
          </li>
        ))}
      </Stul>
    </Stdiv>
  );
}

const Stdiv = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  /* background-color: var(--color-text); */
  border-bottom: 1px solid var(--color-grey);
  margin: 20px;
`;

const Stul = styled.ul`
  display: flex;
  list-style: none;
`;

const Stbtn = styled.button`
  font-size: 1.4rem;
  margin: 0.3rem;
  text-transform: capitalize;
  background-color: transparent;
  color: var(--color-accent);
  opacity: 0.8;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;

  &:hover,
  &.selected {
    opacity: 1;
    transform: scale(1.2);
  }
  &.selected::after {
    content: "";
    display: block;
    margin-top: 0.2rem;
    border: 1px solid var(--color-text);
  }
`;
