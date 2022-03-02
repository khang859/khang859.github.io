<script>
  import ListItemCard from "./ListItemCard.svelte";
  import projects from '../data/projects';
</script>
<section class="w-full">
  <div class="bg-emerald-500 rounded-lg mx-auto text-center py-12">
      <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
        Welcome!
      </h2>
      <div class="w-full mt-4 flex flex-col justify-center px-8 text-white text-lg">
        <p>It seems you've found yourself on my github page.</p>
        <p>Since you're here, have a look around!</p>
      </div>
  </div>  
</section>
<section class="w-full mt-12">
  <h2 class="text-xl font-bold mt-8 text-center">
    PROJECTS
  </h2>
  <p class="text-lg mb-8 mt-2 text-center">
    Atleast the projects I can show anyway
  </p>
  <div class="grid grid-cols-1 md:grid-cols-3 md:gap-5">
    {#each projects as project}
      <ListItemCard {...project}/>
    {/each}
  </div>
</section>