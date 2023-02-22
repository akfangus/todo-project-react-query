import React, { useState } from "react";
import Filter from "../components/Filter";
import List from "../components/List";
import styled from "styled-components";

const filters = ["all", "active", "completed"];
export default function TodoList() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <Stdiv>
      <Filter
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      ></Filter>
      <List filter={filter}></List>
    </Stdiv>
  );
}

const Stdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: "100vh";
  flex-direction: column;
`;
