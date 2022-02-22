<script>
  export let currentPage = 'HOME';
</script>

<nav class="p-5 container">
  <ul class="flex flex-col sm:flex-row flex-wrap justify-center max-w-xs mx-auto">
    <li class="flex-1 text-center pb-2">
      <a 
        href="/"
        class="
          drop-shadow-sm
          bg-white
          px-4
          py-2
          rounded
          transition-colors
          hover:bg-emerald-500
          hover:text-stone-50
          hover:drop-shadow-md
          duration-250"
        class:bg-emerald-500={currentPage === 'HOME'}
        class:text-stone-50={currentPage === 'HOME'}
      >Home</a>
    </li>
    <li class="flex-1 text-center pb-2">
      <a
        href="/about"
        class="
          drop-shadow-sm
          bg-white
          px-4
          py-2
          rounded
          transition-colors
          hover:bg-emerald-500
          hover:text-stone-50
          hover:drop-shadow-md
          duration-250"
        class:bg-emerald-500={currentPage === 'ABOUT'}
        class:text-stone-50={currentPage === 'ABOUT'}
      >About Me</a>
    </li>
  </ul>
</nav>
