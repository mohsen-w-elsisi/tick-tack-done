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
    <h2 class:line-through={task.completed}>{task.title}</h2>
  </label>
</li>

<input type="checkbox" id={modalID} class="modal-toggle" />

<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <form class="form-control gap-1" on:change={saveTaskChanges}>
      <textarea class="textarea w-full" rows="2" bind:value={task.title} />
      <textarea
        class="textarea"
        placeholder="details"
        rows="5"
        bind:value={task.discribtion}
      />
    </form>

    <div class="modal-action">
      <button on:click={toggleCompletionState}>
        <label for={modalID} class="btn">
          mark {task.completed ? "not done" : "done" }
        </label>
      </button>

      <button>
        <label for={modalID} class="btn btn-primary">close</label>
      </button>
    </div>
  </div>
</div>
