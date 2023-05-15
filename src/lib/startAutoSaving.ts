import { tasks } from "../state";
import type { Task, TaskRaw } from "../types";

const LOCAL_STORAGE_KEY = "tasks";

export default function startAutoSaving() {
  tasks.subscribe((tasks) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...tasks.map(convertTaskToTaskRaw)])
    );
  });
}

function convertTaskToTaskRaw(task: Task): TaskRaw {
  return {
    ...task,
    date: task.date.toUTCString(),
  };
}
