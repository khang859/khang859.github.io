<script>
  import router from "page"
  const goToLastKnown = () => {
    router('/app/last-known')
  }

  const goToRecipes = () => {
    router('/app/recipes')
  }
</script>

<div class="flex w-full justify-center mx-auto">
  <div class="flex flex-1 justify-center">
    <a href="/app/last-known" on:click|preventDefault={goToLastKnown}>Last Known</a>
  </div>
  <div class="flex flex-1 justify-center">
    <a href="/app/recipes" on:click|preventDefault={goToRecipes}>Recipes</a>
  </div>
</div>