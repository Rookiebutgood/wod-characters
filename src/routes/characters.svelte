<script>
  import CharacterPage from '../components/CharacterPage.svelte'
  import CharactersList from '../components/CharactersList.svelte'
  import characterStore from '../store/character'

  let character
  
  characterStore.subscribe(value => character = value)
</script>

<style>
  .pageReturn {
    border: none;
    background: none;
    outline: none;
    color: #f4e8c1;
    color: #323031;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
    cursor: pointer;
  }
</style>

{#if character.name}
<button on:click="{() => characterStore.set({})}" class="pageReturn">К списку персонажей</button>
<CharacterPage />
{:else}
<CharactersList />
{/if}
