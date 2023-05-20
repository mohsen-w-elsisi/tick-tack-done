<script lang="ts">
  import loadStateFromStorage from "./lib/loadStateFromStorage";
  import startAutoSaving from "./lib/startAutoSaving";

  import Router from "svelte-spa-router";
  import routes from "./routes";
  import watchForNewTaskOptions from "./lib/watchForNewTaskOptions";
  
  loadStateFromStorage();
  startAutoSaving();
  watchForNewTaskOptions()
</script>

<Router routes={routes} />
