<script>
  export let onClick;
  export let lastKnown;
  export let label;

  $: buttonType = label == 'Refresh' ? 'bg-emerald-500 hover:bg-emerald-800' : 'bg-red-500 hover:bg-red-800';
</script>

<button 
  class="
    mt-4
    md:mt-0
    small-btn
    flex-1
    md:ml-4
    drop-shadow-sm
    bg-white
    text-stone-50
    px-4
    py-2
    rounded
    transition-colors
    hover:drop-shadow-md
    duration-250
    {buttonType}
  " 
on:click={() => onClick(lastKnown)}>{label}</button>

<style>
  .small-btn {
    max-width: 150px;
  }
</style>