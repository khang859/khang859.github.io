<script>
  export let type; 
  export let handleInput;
  export let suffix;
  export let label;
  export let day;

  const getRandomString = (length) => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  $: inputId = `input-${getRandomString(5)}`;
</script>

<div class="grid grid-cols-3 gap-4 max-w-xs">
  <label for={inputId}>{label}</label>
  <input id={inputId} type={type} on:change={(event) => handleInput(day, event.target.value)} class="px-2 rounded border-2 border-emerald-700"/>
  {#if suffix}
    <span>{suffix}</span>
  {/if}
</div>
