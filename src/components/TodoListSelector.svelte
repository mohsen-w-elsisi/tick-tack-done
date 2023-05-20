<script lang="ts">
  import { availableTodoLists } from "../state";

  export let selectedList = "misc";

  let shouldCreateNewList = false;

  $: if (selectedList == "") shouldCreateNewList = true;
</script>

{#if shouldCreateNewList}
  <input
    type="text"
    bind:value={selectedList}
    autofocus
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
