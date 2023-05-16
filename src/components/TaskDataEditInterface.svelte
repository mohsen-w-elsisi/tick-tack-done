<script lang="ts">
  import type { Task } from "../types";

  import TodoListSelector from "./TodoListSelector.svelte";

  export let task: Task;
  export let shouldCreateNewList = false;

  export let onchange = () => null;
</script>

<form class="form-control gap-1" on:change={onchange}>
  <textarea
    class="textarea w-full"
    placeholder="title"
    rows="2"
    bind:value={task.title}
  />

  <textarea
    class="textarea"
    placeholder="details"
    rows="5"
    bind:value={task.discribtion}
  />

  <TodoListSelector
    bind:shouldCreateNewList
    bind:selectedList={task.todoList}
  />
</form>
