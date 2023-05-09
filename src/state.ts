import type { Task } from "./types";
import { writable } from "svelte/store";

export const tasks = writable<Task[]>([
  {
    title: "howdy",
    date: new Date(),
  },
  {
    title: "howdy",
    date: new Date(),
  },
]);
