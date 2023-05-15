<script lang="ts">
  import { tasks } from "../state";
  import TaskTile from "../components/TaskTile.svelte";
  import AddButton from "../components/AddButton.svelte";
  import MainScreenHeader from "../components/MainScreenHeader.svelte";
</script>

<MainScreenHeader />

<main class="menu px-2">
  {#each $tasks as task, i}
    <TaskTile {task} taskIndex={i} />
  {/each}
</main>

<AddButton />
