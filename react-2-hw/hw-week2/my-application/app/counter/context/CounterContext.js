"use client";
import React, { createContext, useContext, useReducer } from "react";

// Define the initial state for the counter
const initialState = { count: 0 };

// Define the actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Create the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create the CounterContext
const CounterContext = createContext();

// Create a provider component to wrap the app and provide the context
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// Custom hook to use the CounterContext
export function useCounter() {
  return useContext(CounterContext);
}
