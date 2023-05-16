<script lang="ts">
  import { availableTodoLists, tasks } from "../state";
  import type { Task } from "../types";
  import TaskDataEditInterface from "./TaskDataEditInterface.svelte";

  let newTask: Task = {
    title: "",
    discribtion: "",
    date: new Date(Date.now()),
    completed: false,
    todoList: "misc",
  };

  let shouldCreateNewList = false;

  $: shouldCreateNewList = shouldCreateNewList || newTask.todoList == "";

  let ModalIsShown = false;

  $: if (!ModalIsShown) {
    newTask = {
      title: "",
      discribtion: "",
      date: new Date(Date.now()),
      completed: false,
      todoList: "misc",
    };

    shouldCreateNewList = false;
  }

  function addNewTask() {
    tasks.update((tasks) => [...tasks, newTask]);

    if (shouldCreateNewList) {
      availableTodoLists.update((todolists) => [
        ...todolists,
        newTask.todoList,
      ]);
    }
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
    <TaskDataEditInterface bind:task={newTask} bind:shouldCreateNewList />

    <div class="modal-action">
      <label for="add-task-modal" class="btn">cancel</label>

      <button on:click={addNewTask}>
        <label for="add-task-modal" class="btn btn-primary">add task</label>
      </button>
    </div>
  </div>
</div>
