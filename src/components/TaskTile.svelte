<script lang="ts">
  import { tasks } from "../state";
  import type { Task } from "../types";
  import TaskEditModal from "./TaskEditModal.svelte";

  export let task: Task;
  export let taskIndex: number;

  const modalID = `task-modal-${taskIndex}`;

  function saveTaskChanges() {
    tasks.update((tasks) => {
      tasks[taskIndex] = task;
      return tasks;
    });
  }

  function toggleCompletionState() {
    task.completed = !task.completed;
    saveTaskChanges();
  }
</script>

<li class="shadow-md p-1">
  <label for={modalID}>
    <input
      type="checkbox"
      class="checkbox"
      bind:checked={task.completed}
      on:change={saveTaskChanges}
    />

    <span>
      <h2 class:line-through={task.completed}>{task.title}</h2>
      <p class="text-xs">{task.todoList}</p>
    </span>
  </label>
  

</li>

<TaskEditModal {task} {modalID} {saveTaskChanges} {toggleCompletionState} />
