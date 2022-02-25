<script>
  import { recipeDb } from '../utils/indexeddb';
  import { fade } from 'svelte/transition';
  import { markdown } from 'markdown';
  import Modal from './Modal.svelte';

  let recipeName;
  let recipeDesc;
  let currentId;
  let nameError = false;

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

  const removeRecipe = async (recipe) => {
    const record = await recipeDb.recipe.where(recipe).toArray();
    if (record.length !== 1) {
      throw new Error('Something went wrong.')
    }
    await recipeDb.recipe.delete(record[0].id);
    list = getListFromDB();
  }

  const getListFromDB = async () => {
    return await recipeDb.recipe.toArray();
  }

  const createNewRecipeBtn = () => {
    recipeName = '';
    recipeDesc = '';
    currentId = undefined;

    toggleModal();
  }

  $: list = getListFromDB();
  $: {
    if (recipeName !== '') nameError = false;
  }

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

{#await list then items}
  <ul class="p-4 mt-10 container flex flex-col">
    {#each items.reverse() as item}
      <li>
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
          <div class="flex-1 mb-4 md:ml-4">{@html markdown.toHTML(item.recipe)}</div>
          <div class="flex justify-end">
            <button on:click={() => { editRecipe(item) }} class='mr-4 bg-sky-700 hover:bg-sky-600 px-4 py-2 text-white rounded transition-colors'>Edit</button>
            <button on:click={() => { removeRecipe(item) }} class='mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors'>Remove</button>
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
        <input bind:value={recipeName} id="recipeName" type="text" placeholder="Enter Recipe Name" class="p-2 rounded w-96 border-solid border-2" class:border-red-500={nameError}/>
      </div>

      <div class="p-4 flex justify-start flex-col">
        <label for="recipeDescription" class="mb-2">Recipe:</label>
        <textarea bind:value={recipeDesc} rows="10" cols="50" id="recipeDescription" placeholder="Enter Recipe" class="p-2 rounded w-96 border-solid border-2"></textarea>
      </div>
    </div>
  </div>
  <div slot="footer">
    <button on:click={addNewRecipe} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{currentId ? 'Update' : 'Create'}</button>
    <button on:click={toggleModal} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
  </div>
</Modal>

