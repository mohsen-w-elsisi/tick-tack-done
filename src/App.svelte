<script lang="ts">
  import loadStateFromStorage from "./lib/loadStateFromStorage";
  import startAutoSaving from "./lib/startAutoSaving";
  import { tasks } from "./state";
  import type { Task } from "./types";

  loadStateFromStorage();
  startAutoSaving();

  function removeMe(taskI: Task) {
    return () =>
      tasks.update((tasksV) => tasksV.filter((v) => v.title != taskI.title));
  }
</script>

<header>
  <span>{$tasks.length} tasks for today</span>
</header>

<style>
  header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 4rem;

    background-color: blue;

    font-size: 2rem;

    padding: 1rem;

    display: flex;
    align-items: center;
  }
</style>
