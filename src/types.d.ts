export interface TaskRaw {
  title: string;
  date: string;
  discribtion?: string;
  completed: boolean;
}

export interface Task {
  title: string;
  date: Date;
  discribtion?: string;
  completed: boolean;
}
