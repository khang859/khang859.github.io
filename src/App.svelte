<script>
  import router from "page"
  import NavBar from "./components/NavBar.svelte";
  import Home from './components/Home.svelte';
  import Recipes from './components/Recipes.svelte';
  import LastKnow from './components/LastKnown.svelte';
  import About from "./components/About.svelte";
import RandomApps from "./components/RandomApps.svelte";

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

  router('/random-apps', () => {
    page = RandomApps;
    currentPage = 'RANDOM_APPS';
  })

  router('/app/recipes', () => page = Recipes);
  router('/app/last-known', () => page = LastKnow);

  router.start()
</script>

<NavBar currentPage={currentPage}/>
<main class="
  container
  mt-5
  flex
  flex-col
  items-center
  mx-auto
  bg-white
  rounded
  p-4
  drop-shadow-md
  min-h-screen">
  <svelte:component this={page} />
</main>

<style>
  :global(body) {
    background-color: #f6f8fa;
    height: 100vh;
  }
</style>