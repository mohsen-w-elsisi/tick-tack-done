<script lang="ts">
  import type { Task } from "../types";
  import TodoListSelector from "./TodoListSelector.svelte";

  export let task: Task;

  export let onchange = () => null;
</script>

<form class="form-control gap-2" on:change={onchange}>
  <input
    type="text"
    class="input input-lg w-full px-4 h-auto py-1"
    placeholder="title"
    bind:value={task.title}
  />

  <textarea
    class="textarea"
    placeholder="details"
    rows="3"
    bind:value={task.discribtion}
  />

  <TodoListSelector bind:selectedList={task.todoList} />

  <input
    type="date"
    on:change={(e) => (task.date = e.currentTarget.valueAsDate)}
  />
</form>
