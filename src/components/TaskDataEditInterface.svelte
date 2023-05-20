<script lang="ts">
  import type { Task } from "../types";
  import TodoListSelector from "./TodoListSelector.svelte";

  export let task: Task;

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

  <TodoListSelector bind:selectedList={task.todoList} />

  <input
    type="date"
    on:change={(e) => (task.date = e.currentTarget.valueAsDate)}
  />
</form>
