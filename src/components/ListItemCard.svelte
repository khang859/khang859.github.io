<script>
  export let heading;
  export let description;
  export let link;
</script>

<div class="shadow-sm rounded p-4 max-w-3xl flex flex-col">
  <h3 class="text-xl font-semibold">{heading}</h3>
  <p class="mt-2">{description}</p>
  <a class="
    bg-emerald-500 mt-4 max-w-fit py-1 px-2
    shadow-sm border-2 border-solid border-emerald-500 rounded
    text-slate-50 hover:bg-emerald-700 hover:border-emerald-700
    transition
    "
    href="{link.url}" target="_blank">
    {link.label}
    <i class="ml-2 fa-solid fa-up-right-from-square fa-xs"></i>
  </a>
</div>