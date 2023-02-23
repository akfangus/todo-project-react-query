import axios from "axios";

const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return response.data;
};

const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const patchStatusTodo = async (payload) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${payload.target}`,
    {
      status: payload.status,
    }
  );
};

const deleteTodo = async (payload) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${payload}`);
};

const editTodo = async (payload) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${payload.target}`,
    {
      title: payload.title,
      content: payload.content,
    }
  );
};

const addComments = async (newTodo) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${newTodo.target}`,
    { comments: newTodo.comments }
  );
};

export {
  getTodos,
  addTodo,
  patchStatusTodo,
  deleteTodo,
  editTodo,
  addComments,
};
