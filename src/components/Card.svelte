<script>
  export let heading;
  export let description;
  export let link;
  export let img;
</script>

<div class="rounded shadow-md flex flex-col w-full">
  {#if img }
    <div class="w-full p-8 justify-center flex">
      <img src="{img.url}" alt="{img.alt}"/>
    </div>
  {/if}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{heading}</div>
    <p class="text-gray-700 text-base">
      {description}
    </p>
    <a
      class="
        flex
        mt-4
        bg-emerald-500
        text-slate-50
        rounded
        px-4
        py-2
        w-full
        sm:w-fit
      "
      href="{link.url}"
      target="{link.newWindow ? '_blank' : ''}"
    >{link.label}</a>
  </div>
</div>