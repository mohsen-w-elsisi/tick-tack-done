<script lang="ts">
  import { today } from "../lib/dateUtils";
  import { availableTodoLists, tasks } from "../state";
  import type { Task } from "../types";
  import TaskDataEditInterface from "./TaskDataEditInterface.svelte";

  let newTask: Task = {
    title: "",
    discribtion: "",
    date: today(),
    completed: false,
    todoList: "misc",
  };

  let ModalIsShown = false;
  $: if (!ModalIsShown) {
    newTask = {
      title: "",
      discribtion: "",
      date: today(),
      completed: false,
      todoList: "misc",
    };
  }

  function addNewTask() {
    tasks.update((tasks) => [...tasks, newTask]);
  }
</script>

<input
  type="checkbox"
  id="add-task-modal"
  class="modal-toggle"
  bind:checked={ModalIsShown}
/>

<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <TaskDataEditInterface bind:task={newTask} />

    <div class="modal-action">
      <label for="add-task-modal" class="btn">cancel</label>

      <button on:click={addNewTask}>
        <label for="add-task-modal" class="btn btn-primary">add task</label>
      </button>
    </div>
  </div>
</div>
