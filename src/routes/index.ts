import type { RouteDefinition } from "svelte-spa-router";

import MainScreen from "./MainScreen.svelte";
import FocusScreen from "./FocusScreen.svelte";

const routes: RouteDefinition = {
  "/": MainScreen,
  "/focus": FocusScreen,
};

export default routes;
