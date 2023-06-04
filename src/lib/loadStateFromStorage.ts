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

function convertTaskRawToTask(rawTask: TaskRaw): Task {
  return {
    ...rawTask,
    date: new Date(rawTask.date),
  };
}

function filterCompletedTasks(tasks: Task[]) {
  return tasks.filter((task) => !task.completed);
}
