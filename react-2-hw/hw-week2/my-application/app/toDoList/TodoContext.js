"use client";

import React, { useReducer, useContext, createContext } from "react";

const initialState = { todos: [] };

function todoReducer(state, action) {
  switch (action.type) {
    case "add_todo":
      return { todos: [...state.todos, action.todo] };
    case "remove_todo":
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };
    case "toggle_todo":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}
