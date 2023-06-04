import type { Task } from "./types";
import { writable } from "svelte/store";

export const tasks = writable<Task[]>();
export const thereIsOverdueTasks = writable(false)
export const availableTodoLists = writable<string[]>([]);
export const relevantDates = writable<Date[]>([]);
