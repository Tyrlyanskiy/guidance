"use client";

import { useEffect, useState } from "react";

import { Todo } from "@/types/Todo";
import { TodoService } from "@/utils/api/ToDoService";

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
        setToDos(data);
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

    await toDoService.addTodo({ title: newTodo });
  };

  const handleDeleteTodo = async (id: number) => {
    await toDoService.deleteTodo(id);
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
