<script lang="ts">
  import NewTaskModal from "./NewTaskModal.svelte";
  import PlusIcon from "./icons/PlusIcon.svelte";
</script>

<label
  for="add-task-modal"
  class="btn btn-primary btn-square fixed bottom-3 right-3"
>
  <PlusIcon />
</label>

<NewTaskModal />
