<script lang="ts">
  import type { Task } from "../types";
  import TaskDataEditInterface from "./TaskDataEditInterface.svelte";

  export let modalID: string;
  export let task: Task;

  export let toggleCompletionState: () => void;
  export let saveTaskChanges: () => void;
</script>

<input type="checkbox" id={modalID} class="modal-toggle" />

<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <TaskDataEditInterface {task} onchange={saveTaskChanges} />
    
    <div class="modal-action">
      <button on:click={toggleCompletionState}>
        <label for={modalID} class="btn btn-sm">
          mark {task.completed ? "not done" : "done"}
        </label>
      </button>

      <button>
        <label for={modalID} class="btn btn-sm btn-primary">close</label>
      </button>
    </div>
  </div>
</div>
