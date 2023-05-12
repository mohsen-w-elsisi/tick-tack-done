import type { Task } from "./types";
import { writable } from "svelte/store";

export const tasks = writable<Task[]>();

