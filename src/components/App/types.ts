export interface Todo {
  id: number;
  title?: string;
  description?: string;
  isComplete: boolean;
};

export interface Todos {
  todos: Todo[];
};
