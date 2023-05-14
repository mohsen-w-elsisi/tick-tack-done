<script lang="ts">
  import { tasks } from "../state";
  import type { Task } from "../types";

  export let task: Task;
  export let taskIndex: number;

  const modalID = `task-modal-${taskIndex}`;

  function saveTaskChanges() {
    tasks.update((tasks) => {
      tasks[taskIndex] = task;
      return tasks;
    });
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
    <h2 class:line-through={task.completed} >{task.title}</h2>
  </label>
</li>

<input type="checkbox" id={modalID} class="modal-toggle" />

<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <form class="form-control gap-1" on:change={saveTaskChanges}>
      <textarea class="textarea w-full" bind:value={task.title} />
      <textarea
        class="textarea"
        placeholder="details"
        bind:value={task.discribtion}
      />
    </form>

    <div class="modal-action">
      <label for={modalID} class="btn btn-primary">done</label>
    </div>
  </div>
</div>
