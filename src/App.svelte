<script lang="ts">
  import loadStateFromStorage from "./lib/loadStateFromStorage";
  import startAutoSaving from "./lib/startAutoSaving";

  import Header from "./components/Header.svelte";
  import MenuButton from "./components/MenuButton.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";

  loadStateFromStorage();
  startAutoSaving();
</script>

<Router routes={routes} />
