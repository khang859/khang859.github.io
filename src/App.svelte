<script>
  import router from "page"
  import NavBar from "./components/NavBar.svelte";
  import Home from './components/Home.svelte';
  import Recipes from './components/Recipes.svelte';
  import LastKnow from './components/LastKnown.svelte';

  let page;

  router('/', () => page = Home);
  router('/app/recipes', () => page = Recipes);
  router('/app/last-known', () => page = LastKnow);

  router.start()
</script>

<NavBar />
<main class="container mt-5">
  <svelte:component this={page} />
</main>

