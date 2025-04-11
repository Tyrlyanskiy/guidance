"use client";

import { useEffect, useState } from "react";

import { Todo } from "@/types/Todo";

//Dependency Inversion Principle (DIP)
const TodoListBeforeDIP = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data: Todo[] = await response.json();
      setTodos(data.slice(0, 10));
    };

    fetchTodos().catch((error) => {
      console.error("Error fetching todos:", error);
    });

    // Cleanup function to avoid memory leaks
    return () => {
      setTodos([]);
    };
  }, []);

  const createTodo = async (title: string): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(title),
    });
    const data: Todo = await response.json();
    setTodos((prevTodos) => [...prevTodos, data]);
  };

  const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => createTodo("New Todo")}>Add Todo</button>
    </div>
  );
};
