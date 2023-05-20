<script lang="ts">
  import { link } from "svelte-spa-router";
  import { tasks } from "../state";
  import FocusIcon from "./icons/FocusIcon.svelte";
  import type { Task } from "../types";
  import { isToday } from "../lib/dateUtils";

  let todaysTasks: Task[] = [];

  tasks.subscribe((newTasks) => {
    todaysTasks = newTasks.filter((task) => isToday(task.date));
  });
</script>

<header class="navbar shadow-xl">
  <div class="flex-1">
    <h1>{todaysTasks.length} tasks today</h1>
  </div>
  <div class="flex-none">
    <a href="/focus" use:link class="btn btn-sm btn-square grid place-content-center">
      <FocusIcon />
    </a>
  </div>
</header>
