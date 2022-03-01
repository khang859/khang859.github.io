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

  router('/app/recipes', () => {
    currentPage = 'RANDOM_APPS';
    page = Recipes
  });
  router('/app/last-known', () => {
    currentPage = 'RANDOM_APPS';
    page = LastKnow
  });

  router.start()
</script>

<NavBar currentPage={currentPage}/>
<main class="
  container
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
<footer class="flex mx-auto justify-center p-5 container mx-auto my-4 bg-white rounded drop-shadow-md">
  Made with love by Khang Nguyen
</footer>

<style>
  :global(body) {
    background-color: #f6f8fa;
    height: 100vh;
  }
</style>