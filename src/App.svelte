<script>
  import router from "page"
  import NavBar from "./components/NavBar.svelte";
  import Home from './pages/Home.svelte';
  import Recipes from './pages/Recipes.svelte';
  import LastKnow from './pages/LastKnown.svelte';
  import About from "./pages/About.svelte";
  import RandomApps from "./pages/RandomApps.svelte";
  import DurationCalculator from "./pages/DurationCalculator.svelte";

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

  router('/app/duration-calculator', () => {
    currentPage = 'RANDOM_APPS';
    page = DurationCalculator;
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
  p-8
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