<script lang="ts">
  import { tasks } from "../state";
  import { dateHasPassed } from "../lib/dateUtils";
  import SchedualViewHeading from "./SchedualViewHeading.svelte";
  import TaskTile from "./TaskTile.svelte";
</script>

<SchedualViewHeading overdue />
{#each $tasks as task, i}
  {#if dateHasPassed(task.date)}
    <TaskTile {task} taskIndex={i} />
  {/if}
{/each}
