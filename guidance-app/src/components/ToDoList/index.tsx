"use client";

import { useEffect, useState } from "react";

import { Todo } from "@/types/Todo";
import { TodoService } from "@/utils/api/ToDoService";
import Button from "../UI/Button";
import PageHeadline from "../UI/PageHeadline";

interface Props {
  toDoService: TodoService;
}

//Dependency Inversion Principle (DIP)
const ToDoList = ({ toDoService }: Props) => {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    toDoService
      .getTodos()
      .then((data) => {
        setToDos(data.slice(0, 15));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });

    return () => {
      setToDos([]);
    };
  }, [toDoService]);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;

    const res = await toDoService.addTodo({ title: newTodo });
    setToDos((prevTodos) => [
      { id: Date.now(), title: newTodo, completed: false },
      ...prevTodos,
    ]);
  };

  const handleDeleteTodo = async (id: number) => {
    await toDoService.deleteTodo(id);
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex gap-4 flex-col">
      <PageHeadline>Todo List</PageHeadline>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="w-1/2 rounded px-2 py-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>

      <ul className="bg-white rounded mt-4 shadow-md">
        {toDos.map((todo) => (
          <li key={todo.id} className="flex items-center px-4 py-2 border-b">
            <p>{todo.title}</p>
            <Button
              className="ml-auto"
              variant="remove"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
