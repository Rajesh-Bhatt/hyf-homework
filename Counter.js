"use client";
import React from "react";
import { useCounter } from "../context/CounterContext";

function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className={"text-4xl m-5 text-center"}>Counter Page</h1>
      <p className={"text-2xl m-3"}>Count: {state.count}</p>

      <div className="flex space-x-4">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="bg-blue-500 text-white p-3 rounded-full text-xl hover:bg-blue-600 transition-all"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="bg-red-500 text-white p-3 rounded-full text-xl hover:bg-red-600 transition-all"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
