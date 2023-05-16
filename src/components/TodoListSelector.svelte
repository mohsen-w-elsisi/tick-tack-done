<script lang="ts">
  import { availableTodoLists } from "../state";

  export let shouldCreateNewList = false;
  export let selectedList = "misc";
</script>

{#if shouldCreateNewList}
  <input
    type="text"
    bind:value={selectedList}
    autofocus="true"
    class="input input-border"
    placeholder="list"
  />
{:else}
  <select bind:value={selectedList} class="select">
    {#each $availableTodoLists as todoList}
      <option value={todoList}>{todoList}</option>
    {/each}

    <option value="">add new...</option>
  </select>
{/if}
