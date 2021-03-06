<script>
  import { recipeDb } from '../utils/indexeddb';
  import MarkdownIt from 'markdown-it';
  import Modal from '../components/Modal.svelte';
  import Fuse from 'fuse.js'
  import { beforeUpdate, tick } from 'svelte';

  let recipeName;
  let recipeDesc;
  let currentId;
  let searchBox;
  let nameError = false;
  let removeItemId;

  const md = new MarkdownIt();

  const getListFromDB = async () => {
    const items = await recipeDb.recipe.reverse().toArray();

    if (searchBox) {
      const fuzzySearchOptions = {
        keys: ['name', 'recipe']
      }
      const fuse = new Fuse(items, fuzzySearchOptions)
      return fuse.search(searchBox).map(item => item.item);
    }
    
    return items;
  }

  let list = getListFromDB();

  const toggleModal = () => {
    const modal = document.querySelector('[data-selector="recipe-modal"]');
    modal.classList.toggle('hidden')
  }

  const addNewRecipe = async () => {

    if (recipeName === '' || !recipeName) {
      nameError = true;
      return;
    }

    const item = {
      name: recipeName,
      recipe: recipeDesc
    }

    if (currentId !== undefined) {
      await recipeDb.recipe.update(currentId, item);
      currentId = undefined;
    }
    else {
      await recipeDb.recipe.add(item);
    }

    list = getListFromDB();
    toggleModal();
  }

  const editRecipe = async (recipe) => {
    const record = await recipeDb.recipe.where(recipe).toArray();
    if (record.length !== 1) {
      throw new Error('Something went wrong.')
    }

    recipeName = record[0].name;
    recipeDesc = record[0].recipe;
    currentId = record[0].id;
    toggleModal();
  }

  const removeRecipeConfirm = (id) => {
    removeItemId = id;
  }

  const removeRecipe = async (recipe) => {
    const record = await recipeDb.recipe.where(recipe).toArray();
    if (record.length !== 1) {
       throw new Error('Something went wrong.')
    }
    await recipeDb.recipe.delete(record[0].id);
    list = getListFromDB();
    removeItemId = undefined;
  }

  const createNewRecipeBtn = () => {
    recipeName = '';
    recipeDesc = '';
    currentId = undefined;

    toggleModal();
  }

  let searchTimer;
  let typingInterval = 500;

  const searchBoxKeyup = () => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(userFinishedTyping, typingInterval);
  }

  const searchBoxKeydown = () => {
    clearTimeout(searchTimer)
  }

  const userFinishedTyping = () => {
    list = getListFromDB();
  }

  const clearSearchBox = () => {
    searchBox = undefined;
    list = getListFromDB();
  }
  
  beforeUpdate(async () => {
    await tick();
    const btn = document.querySelector(`[data-confirm-button="${removeItemId}"]`)

    if (btn) {
      btn.disabled = true;

      setTimeout(() => {
        btn.disabled = false;
      }, 500)
    }
  })

  $: if (recipeName !== '') nameError = false;
</script>

<section>
  <button 
    class="
      mt-4
      md:mt-0
      small-btn
      flex-1
      md:ml-4
      drop-shadow-sm
      bg-emerald-500
      text-stone-50
      px-4
      py-2
      rounded
      transition-colors
      hover:drop-shadow-md
      duration-250
      text-white
    " on:click={createNewRecipeBtn}>+ Add new recipe</button>
</section>

<div class="flex justify-center flex-col align-middle	mt-4 w-3/4 sm:flex-row">
<label for="search1" class="invisible w-0">Search:</label>
<input on:keyup={searchBoxKeyup} on:keydown={searchBoxKeydown} bind:value={searchBox} id="search1" type="text" placeholder="Search" class="p-2 rounded w-full sm:w-3/4 border-solid border-2"/>
{#if searchBox}
  <button on:click={clearSearchBox} class="items-center	w-full mt-4 sm:mt-0 flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-1/3 sm:text-sm">
    Clear Search
  </button>
{/if}
</div>

{#await list then items}
  <ul class="p-4 mt-10 container flex flex-col list-none">
    {#each items as item}
      <li data-list-item-selector={item.id}>
        <div class="
            p-4
            container
            flex
            justify-center
            flex-col
            bg-white
            mt-8
            drop-shadow-md
            border-2
            border-slate-50
            border-solid
            rounded
            mb-4
          ">
          <h3 class="flex-1 mb-4 font-semibold text-lg">{item.name}</h3>
          <div class="recipe-styles flex-1 mb-4 md:ml-4">{@html md.render(item.recipe)}</div>
          <div class="flex justify-end">
            <button on:click={() => {
              removeItemId = undefined
              editRecipe(item) 
            }} class='mr-4 bg-sky-700 hover:bg-sky-600 px-4 py-2 text-white rounded transition-colors'>Edit</button>
            
            {#if removeItemId == item.id}
              <button 
                on:click={() => {
                  removeItemId = undefined
                }}
                class='mr-4 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-white rounded transition-colors'>
                  Cancel
                </button>
              <button on:click={() => {
                removeRecipe(item);
              }} data-confirm-button={item.id} class='disabled:bg-slate-500 mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors'>Confirm Removal</button>
            {:else}
              <button on:click={() => {
                removeRecipeConfirm(item.id);
              }} class='mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors'>Remove</button>
            {/if}
            
            
          </div>
        </div>
      </li>
    {/each}
  </ul>
{/await}

<Modal selector="recipe-modal">
  <div slot="body">
    <div>
      <div class="p-4 flex flex-col">
        <label for="recipeName" class="mb-2">Recipe Name:</label>
        <input bind:value={recipeName} id="recipeName" type="text" placeholder="Enter Recipe Name" class="p-2 rounded w-full border-solid border-2" class:border-red-500={nameError}/>
      </div>

      <div class="p-4 flex justify-start flex-col">
        <label for="recipeDescription" class="mb-2">Recipe:</label>
        <textarea bind:value={recipeDesc} rows="10" cols="50" id="recipeDescription" placeholder="Enter Recipe" class="p-2 rounded w-full border-solid border-2"></textarea>
      </div>
    </div>
  </div>
  <div slot="footer">
    <button on:click={addNewRecipe} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{currentId ? 'Update' : 'Create'}</button>
    <button on:click={toggleModal} type="button" class="mt-4 md:mt-0 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
  </div>
</Modal>
