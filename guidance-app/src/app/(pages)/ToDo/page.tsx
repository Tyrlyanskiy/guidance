"use client";

import { ApiTodoService } from "@/utils/api/ToDoService";
import ToDoList from "@/components/ToDoList";

const toDoService = new ApiTodoService();

const TodoPage = () => {
  return <ToDoList toDoService={toDoService} />;
};

export default TodoPage;
