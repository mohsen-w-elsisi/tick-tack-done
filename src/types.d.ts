export interface TaskRaw {
  title: string;
  date: string;
  discribtion?: string;
  completed: boolean;
  todoList: string;
}

export interface Task {
  title: string;
  date: Date;
  discribtion?: string;
  completed: boolean;
  todoList: string;
}
