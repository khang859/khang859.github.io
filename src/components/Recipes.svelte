<script>
  import { recipeDb } from '../utils/indexeddb';
  import { fade } from 'svelte/transition';

  let recipeName;
  let recipeDesc;

  let nameError = false;

  const toggleModal = () => {
    const modal = document.querySelector('[data-selector="recipe-modal"]');
    modal.classList.toggle('hidden')
  }

  const addNewRecipe = () => {

    if (recipeName === '' || !recipeName) {
      nameError = true;
      return;
    }

    const item = {
      name: recipeName,
      recipe: recipeDesc
    }

    try {
      recipeDb.recipe.add(item);
      list = getListFromDB();
    } catch (error) {
      console.log(error);
    }

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
    " on:click={toggleModal}>+ Create new recipe</button>
</section>

{#await list then items}
  <ul class="p-4 mt-10 container flex flex-col" in:fade={{delay: 500}} out:fade={{ duration: 500 }}>
    {#each items.reverse() as item}
      <li>
        <div class="
            p-4
            container
            flex
            justify-center
            flex-col
            bg-white
            drop-shadow-sm
            rounded
            mb-4
          ">
          <h3 class="flex-1 mb-4 font-semibold text-lg">{item.name}</h3>
          <div class="flex-1 mb-4 md:ml-4">{item.recipe}</div>
          <div class="flex justify-end">
            <button on:click={() => { removeRecipe(item) }} class='mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors'>Remove</button>
          </div>
        </div>
        
      </li>
    {/each}
  </ul>
{/await}

<div class="fixed z-10 inset-0 overflow-y-auto hidden" data-selector="recipe-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Create a new recipe</h3>
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
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-end">
        <button on:click={addNewRecipe} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Create</button>
        <button on:click={toggleModal} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
      </div>
    </div>
  </div>
</div>
