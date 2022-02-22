<script>
  import router from "page"
  import NavBar from "./components/NavBar.svelte";
  import Home from './components/Home.svelte';
  import Recipes from './components/Recipes.svelte';
  import LastKnow from './components/LastKnown.svelte';
  import About from "./components/About.svelte";

  let page;
  let currentPage = 'HOME';

  router('/', () => {
    page = Home;
    currentPage = 'HOME';
  });
  router('/about', () => {
    page = About;
    currentPage = 'ABOUT';
  });
  router('/app/recipes', () => page = Recipes);
  router('/app/last-known', () => page = LastKnow);

  router.start()
</script>

<NavBar currentPage={currentPage}/>
<main class="container mt-5 container flex flex-col items-center mx-auto">
  <svelte:component this={page} />
</main>

<style>
  :global(body) {
    background-color: #f6f8fa;
    height: 100vh;
  }
</style>