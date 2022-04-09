<script>
  import router from "page";
  import Card from '../components/Card.svelte';
</script>

<section class="text-center mb-8">
  <h1 class="text-2xl font-bold my-4">Random apps I made for random things I need.</h1>
  <p>All the apps are using IndexedDB, so it only live in your browser.</p>
</section>
<section class="flex flex-col sm:flex-row w-full justify-center mx-auto my-8 grid grid-cols-1 md:grid-cols-3 md:gap-5">
  <div class="flex flex-1 w-full m-2 justify-center">
    <Card link={{
        url: '/app/last-known',
        label: 'Go to Last Known'
      }}
      heading='Last Known App'
      description="Ever need to remember the last time you did something?"
    />
  </div>
  <div class="flex flex-1 w-full m-2 justify-center">
    <Card link={{
        url: '/app/recipes',
        label: 'Go to Recipes'
      }}
      heading='Recipes App'
      description="Need some place to keep all your recipes? and be able to search it?"
    />
  </div>
  <div class="flex flex-1 w-full m-2 justify-center">
    <Card link={{
        url: '/app/duration-calculator',
        label: 'Go to Duration Calculator'
      }}
      heading='Duration Calculator'
      description="Probably not for most people"
    />
  </div>
  <div class="flex flex-1 w-full m-2 justify-center">
    <Card link={{
        url: '/app/code-editor',
        label: 'Go to Code Editor'
      }}
      heading='Code Editor'
      description="Edit some code."
    />
  </div>
</section>