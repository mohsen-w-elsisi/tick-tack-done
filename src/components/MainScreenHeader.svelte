<script>
  import { link } from "svelte-spa-router";
  import { tasks } from "../state";
  import FocusIcon from "./icons/FocusIcon.svelte";
</script>

<header class="navbar shadow-xl">
  <div class="flex-1">
    <h1>{$tasks.length} tasks today</h1>
  </div>
  <div class="flex-none">
    <a href="/focus" use:link class="btn btn-ghost btn-square">
      <FocusIcon />
    </a>
  </div>
</header>
