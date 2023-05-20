<script lang="ts">
  import TaskTile from "./TaskTile.svelte";
  import { tasks } from "../state";

  export let date: Date;
</script>

{#each $tasks as task, i}
  {#if task.date.getDate() == date.getDate() && task.date.getMonth() == date.getMonth()}
    <TaskTile {task} taskIndex={i} />
  {/if}
{/each}
