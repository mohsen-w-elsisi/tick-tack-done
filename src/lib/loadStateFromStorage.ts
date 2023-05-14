import { tasks } from "../state";
import type { Task, TaskRaw } from "../types";

export default function loadStateFromStorage() {
  const taskJson = readJsonFromStorage();
  const parsedTasks = parseTasksJson(taskJson);
  const notCompletedTasks = filterCompletedTasks(parsedTasks);

  tasks.set(notCompletedTasks);
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

function filterCompletedTasks(tasks: Task[]) {
  return tasks.filter((task) => !task.completed);
}
