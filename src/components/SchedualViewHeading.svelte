<script lang="ts">
  import { toVisualText } from "../lib/dateUtils";

  export let overdue = false;
  export let date: Date | null = null;
</script>

<h2 class="text-xl flex items-center gap-4">
  <span class="flex-2 text-base-content opacity-60" class:text-error={overdue}>
    {#if overdue}
      overdue
    {:else}
      {toVisualText(date)}
    {/if}
  </span>
  <hr class="flex-1 divider border-none" />
</h2>
