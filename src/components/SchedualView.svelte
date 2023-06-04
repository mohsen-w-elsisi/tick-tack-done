<script>
  import { dateHasPassed } from "../lib/dateUtils";
  import { thereIsOverdueTasks } from "../state";
  import { relevantDates } from "../state";
  import OverdueTasks from "./OverdueTasks.svelte";

  import SchedualViewHeading from "./SchedualViewHeading.svelte";
  import TasksWithDate from "./TasksWithDate.svelte";
</script>

<main class="menu p-2 sm:px-6">
  {#if $thereIsOverdueTasks}
    <OverdueTasks />
  {/if}

  {#each $relevantDates as date}
    {#if !dateHasPassed(date)}
      <SchedualViewHeading {date} />
      <TasksWithDate {date} />
    {/if}
  {/each}
</main>
