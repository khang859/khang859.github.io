<script>
  export let handleInput;
  export let label;

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

<div class="grid grid-cols-2 gap-2 max-w-xs large-input">
  <label for={inputId}>{label}</label>
  <input id={inputId} type='date' on:change={handleInput} class="px-2 rounded border-2 border-emerald-700"/>
</div>

<style>
  .large-input {
    grid-template-columns: 1fr 2fr;
  }
</style>