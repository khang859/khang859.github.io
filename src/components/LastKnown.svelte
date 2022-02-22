<script>
  let list = [];
  let newItem;

  const dateOptions = { dateStyle: 'long' ,timeStyle: 'medium' };

  const handleOnclick = () => {
    list = [...list, {
      name: newItem,
      lastKnown: Intl.DateTimeFormat('en-US', dateOptions).format(new Date()),
    }];
  }

  const logLastKnown = (idx) => {
    list[idx].lastKnown = Intl.DateTimeFormat('en-US', dateOptions).format(new Date());
  }

</script>

<div>
  <input type="text" placeholder="New item name" bind:value={newItem}/>
  <button on:click={handleOnclick}>Create</button>
</div>

{#if list.length > 0}
  {#each list as item, i}
    <li>
      <span>{item.name}</span>
      <span>{item.lastKnown}</span>
      <button on:click={() => logLastKnown(i)}>Log last known</button>
    </li>
  {/each}
{/if}