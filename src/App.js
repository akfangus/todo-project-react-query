import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "works", element: <TodoList /> },
      { path: "works/:id", element: <TodoDetail /> },
      { path: "works/addtodo", element: <AddTodo /> },
    ],
  },
]);
function App() {
  //outlet을 사용해서 header를 항상 위에 표시하도록
  return <RouterProvider router={router} />;
}

export default App;
