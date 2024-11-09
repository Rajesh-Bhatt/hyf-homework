"use client";
import React, { useState } from "react";
import { useTodo, addTodo, removeTodo, toggleTodo } from "./TodoContext";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { state, dispatch } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({
        type: "add_todo",
        todo: { id: Date.now(), text: newTodo, completed: false },
      });
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "remove_todo", id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "toggle_todo", id });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={styles.input}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo} className={styles.button}>
          Add Todo
        </button>
      </div>

      <ul className={styles.todoList}>
        {state.todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            <span
              className={`${styles.todoText} ${
                todo.completed ? styles.completed : ""
              }`}
            >
              {todo.text}
            </span>
            <div className={styles.actionButtons}>
              <button
                onClick={() => handleToggleTodo(todo.id)}
                className={styles.toggleButton}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
