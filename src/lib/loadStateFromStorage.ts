import { tasks, availableTodoLists, relevantDates } from "../state";
import type { Task, TaskRaw } from "../types";
import {
  removeTimeFromDate,
  representitiveValueOf,
  sortDates,
} from "./dateUtils";

export default function loadStateFromStorage() {
  const taskJson = readJsonFromStorage();
  const parsedTasks = parseTasksJson(taskJson);
  const notCompletedTasks = filterCompletedTasks(parsedTasks);

  tasks.set(notCompletedTasks);

  const todoListsInTasks = findExistingTodoListsIn(notCompletedTasks);
  availableTodoLists.set(todoListsInTasks);

  const datesInTasks = findExistingDatesIn(notCompletedTasks);
  relevantDates.set(datesInTasks);
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

function findExistingTodoListsIn(tasks: Task[]) {
  const todoListsInTasks = tasks.map((task) => task.todoList);

  const todoListsInTasksNoDuplicates: string[] = [];

  for (const todoList of todoListsInTasks) {
    if (!todoListsInTasksNoDuplicates.includes(todoList) && todoList) {
      todoListsInTasksNoDuplicates.push(todoList);
    }
  }

  return todoListsInTasksNoDuplicates;
}

function findExistingDatesIn(tasks: Task[]) {
  const datesInTasks = tasks.map((task) => task.date).map(removeTimeFromDate);

  const DatesInTasksNoDuplicates: Date[] = [];

  for (const date of datesInTasks) {
    if (
      ! DatesInTasksNoDuplicates.map(representitiveValueOf).includes(
        representitiveValueOf(date)
      )
    ) {
      DatesInTasksNoDuplicates.push(date);
    }
  }

  console.log(DatesInTasksNoDuplicates);

  return sortDates(DatesInTasksNoDuplicates);
}
