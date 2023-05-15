<script lang="ts">
  import { tasks } from "../state";
  import type { Task } from "../types";

  const newTask: Task = {
    title: "",
    discribtion: "",
    date: new Date(Date.now()),
    completed: false,
  };

  function addNewTask() {
    tasks.update((tasks) => [...tasks, newTask]);
  }
</script>

<input type="checkbox" id="add-task-modal" class="modal-toggle" />

<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <form class="form-control gap-1">
      <textarea
        class="textarea w-full"
        placeholder="title"
        rows="2"
        bind:value={newTask.title}
      />
      <textarea
        class="textarea"
        placeholder="details"
        rows="5"
        bind:value={newTask.discribtion}
      />
    </form>

    <div class="modal-action">
      <label for="add-task-modal" class="btn">cancel</label>

      <button on:click={addNewTask}>
        <label for="add-task-modal" class="btn btn-primary">add task</label>
      </button>
    </div>
  </div>
</div>
