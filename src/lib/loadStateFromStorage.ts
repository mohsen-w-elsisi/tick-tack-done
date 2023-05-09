import { tasks } from "../state";
import type { Task, TaskRaw } from "../types";

export default function loadStateFromStorage() {
  const taskJson = readJsonFromStorage();
  const parsedTasks = parseTasksJson(taskJson);

  tasks.set(parsedTasks);
}

function readJsonFromStorage(): TaskRaw[] | null {
  try {
    return JSON.parse(localStorage.getItem("tasks"));
  } catch {
    return null;
  }
}

function parseTasksJson(taskJson: TaskRaw[]) {
  return taskJson ? taskJson.map(convertTaskRawToTask) : [];
}

function convertTaskRawToTask({
  title,
  date,
  discribtion,
  completed,
}: TaskRaw): Task {
  return {
    title,
    date: new Date(date),
    discribtion,
    completed,
  };
}
