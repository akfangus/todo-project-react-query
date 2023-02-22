import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, patchStatusTodo, deleteTodo } from "../api/todoApi";
import ListElement from "./ListElement";

export default function List({ filter }) {
  const { isLoading, isError, data: todos } = useQuery("todos", getTodos);
  const filtered = getFilteredItems(todos, filter);
  const queryClient = useQueryClient();
  console.log("call");

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSettled: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const toggleTodoMutation = useMutation(patchStatusTodo, {
    onSettled: () => {
      //finally
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      //catch
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{isError}</p>;

  const handelDelete = (e) => {
    if (window.confirm("정말 삭제하시렵니까?")) {
      deleteTodoMutation.mutate(e);
    }
  };

  const handleChange = async (e) => {
    const status = e.target.checked ? "completed" : "active";
    // console.log(status);

    await toggleTodoMutation.mutate({
      target: e.target.value,
      status,
    });
  };
  return (
    <ul>
      {filtered?.map((todo) => {
        return (
          <ListElement
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            onDelete={handelDelete}
          />
        );
      })}
    </ul>
  );
}
const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
