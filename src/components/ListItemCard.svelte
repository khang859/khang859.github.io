<script>
  export let heading;
  export let description;
  export let link;
</script>

<div class="shadow-md rounded p-4 max-w-3xl flex flex-col">
  <div class="h-full flex flex-col">
    <h3 class="text-xl font-semibold">{heading}</h3>
    <p class="mt-2 flex-1">{description}</p>
    <a class="
      bg-white mt-4 max-w-fit py-1 px-2
      rounded 
      hover:bg-emerald-500
      hover:text-slate-50
      transition
      "
      href="{link.url}" target="_blank">
      {link.label}
      <i class="ml-2 fa-solid fa-up-right-from-square fa-xs"></i>
    </a>
  </div>
</div>
