<script lang="ts">
  import type { Task } from "../types";
  import { link } from "svelte-spa-router";
  import { tasks } from "../state";
  import PlusIcon from "../components/icons/PlusIcon.svelte";
  import FocusIcon from "../components/icons/FocusIcon.svelte";
  import TaskTile from "../components/TaskTile.svelte";

  const exampleTask: Task = {
    completed: false,
    date: new Date(Date.now()),
    title: "lorem example stuff bology stuff",
    discribtion: "lorem ipusm deloris plus plus",
  };
</script>

<header class="navbar shadow-xl">
  <div class="flex-1">
    <h1>{$tasks.length} tasks today</h1>
  </div>
  <div class="flex-none">
    <a href="/focus" use:link class="btn btn-ghost btn-square">
      <FocusIcon />
    </a>
  </div>
</header>

<main class="menu px-2">
  {#each $tasks as task, i }
    <TaskTile {task} taskIndex={i} />
  {/each}
</main>

<button
  class="btn btn-square btn-accent fixed bottom-3 right-3"
  on:click={() => tasks.update((v) => [...v, { ...exampleTask }])}
>
  <PlusIcon />
</button>
