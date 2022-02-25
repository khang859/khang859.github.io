<script>
  import { db } from '../utils/indexeddb';
  import Button from './Button.svelte';
  import ListItem from './ListItem.svelte';

  let newItem;

  const dateOptions = { dateStyle: 'long' ,timeStyle: 'medium' };

  const addItemToList = () => {
    const item = {
      name: newItem,
      lastKnown: Intl.DateTimeFormat('en-US', dateOptions).format(new Date()),
    };

    try {
      db.lastKnown.add(item);
      list = getListFromDB();
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnclick = () => addItemToList();

  const logLastKnown = async (lastKnown) => {
    const record = await db.lastKnown.where({ lastKnown }).toArray();
    if (record.length !== 1) {
      throw new Error('Something went wrong.')
    }
    const item = Intl.DateTimeFormat('en-US', dateOptions).format(new Date());
    await db.lastKnown.update(record[0].id, { lastKnown: item});
    list = getListFromDB();
  }

  const handleEnterKey = (event) => {
    if (event.keyCode === 13) addItemToList();
  }

  const deleteLastKnown = async (lastKnown) => {
    const record = await db.lastKnown.where({ lastKnown }).toArray();
    if (record.length !== 1) {
      throw new Error('Something went wrong.')
    }
    await db.lastKnown.delete(record[0].id);
    list = getListFromDB();
  }

  const getListFromDB = async () => {
    return await db.lastKnown.toArray();
  }

  $: list = getListFromDB();

</script>

<div class="container flex justify-center w-100">
  <input class="px-4 py-2" type="text" placeholder="New item name" bind:value={newItem} on:keyup={handleEnterKey}/>
  <button 
    class="
      ml-4
      drop-shadow-sm
      bg-white
      px-4
      py-2
      rounded
      transition-colors
      hover:bg-emerald-500
      hover:text-stone-50
      hover:drop-shadow-md
      duration-250
    "
    on:click={handleOnclick}>Create</button>
</div>

{#await list then items}
  <ul class="p-4 mt-10 container flex flex-col items-center ">
    {#each items as item, i}
      <ListItem>
          <h3 class="flex-1 mb-4 font-semibold text-lg">{item.name}</h3>
          <span class="flex-1 mb-4 md:ml-4">Last Known: {item.lastKnown}</span>
          <div class="container flex-1 flex flex-col md:flex-row">
          <Button onClick={logLastKnown} label='Refresh' lastKnown={item.lastKnown}/>
          <Button onClick={deleteLastKnown} label='Delete' lastKnown={item.lastKnown}/>
        </div>
      </ListItem>
    {/each}
  </ul>
{/await}
