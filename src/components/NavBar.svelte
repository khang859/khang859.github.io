<script>
  export let currentPage = 'HOME';
  const setHightlight = () =>'border-2 border-solid border-emerald-500';
</script>

<nav class="p-5 container mx-auto bg-white rounded mt-4 drop-shadow-md">
  <ul class="flex flex-col sm:flex-row flex-wrap justify-center mx-auto w-full">
    <li class="flex-1 text-center pb-2">
      <a 
        href="/"
        class="
          px-4
          py-2
          rounded
          hover:border-2
          hover:border-dashed
          hover:border-emerald-500
          transition-border
          duration-300
          {currentPage === 'HOME' ? setHightlight('HOME') : ''}
          "
      >Home</a>
    </li>
    <li class="flex-1 text-center pb-2">
      <a
        href="/about"
        class="
          px-4
          py-2
          rounded
          hover:border-2
          hover:border-dashed
          hover:border-emerald-500
          transition-border
          duration-300
          {currentPage === 'ABOUT' ? setHightlight('ABOUT') : ''}
          "
      >About Me</a>
    </li>
    <li class="flex-1 text-center pb-2">
      <a
        href="/random-apps"
        class="
          px-4
          py-2
          rounded
          hover:border-2
          hover:border-dashed
          hover:border-emerald-500
          transition-border
          duration-300
          {currentPage === 'RANDOM_APPS' ? setHightlight('RANDOM_APPS') : ''}
          "
      >Random Apps</a>
    </li>
  </ul>
</nav>
