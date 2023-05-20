<script>
  import { dateHasPassed, toVisualText } from "../lib/dateUtils";
  import { tasks, relevantDates } from "../state";

  import SchedualViewHeading from "./SchedualViewHeading.svelte";
  import TaskTile from "./TaskTile.svelte";
  import TasksWithDate from "./TasksWithDate.svelte";
</script>

<main class="menu p-2 sm:px-6">
  <SchedualViewHeading overdue />
  {#each $tasks as task, i}
    {#if dateHasPassed(task.date)}
      <TaskTile {task} taskIndex={i} />
    {/if}
  {/each}

  {#each $relevantDates as date}
    {#if !dateHasPassed(date)}
      <SchedualViewHeading {date} />
      <TasksWithDate {date} />
    {/if}
  {/each}
</main>
