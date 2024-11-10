import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";

const TodoPage = () => {
  return (
    <TodoProvider>
      <div>
        <h1 style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          My Available Todo List:
        </h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoPage;
