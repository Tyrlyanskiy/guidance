import { Todo } from "@/types/Todo";

export interface TodoService {
  getTodos(): Promise<Todo[]>;
  addTodo(todo: Partial<Todo>): Promise<Todo>;
  deleteTodo(id: number): Promise<number>;
}

export class ApiTodoService implements TodoService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com/todos";
  }

  async getTodos(): Promise<Todo[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  }

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      return response.json();
    } catch (error) {
      console.error("Error adding todo:", error);
      throw error;
    }
  }
  async deleteTodo(id: number): Promise<number> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      return id;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }
}
