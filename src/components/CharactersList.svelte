<script lang="ts">
  import * as vampires from '../data/vtm'
  import * as mages from '../data/mta'
  import * as demons from '../data/dtf'
  import characterStore from '../store/character'
  import CharactersSystemFilter from './CharactersSystemFilter.svelte';

  let systemFilter: string = ''

  const selectSystemFilter = (val :string) => {
    systemFilter == val 
      ? systemFilter = '' 
      : systemFilter = val
  }

  const getSystem = (text :string) => {
    switch(text) {
      case 'vtm':
        return 'Vampire'
      case 'wta':
        return 'Werewolf'
      case 'mta':
        return 'Mage'
      case 'dtf':
        return 'Demon'
      default:
        return ''
    }
  }

  const chars = {...vampires, ...mages, ...demons}
</script>

<style>
  .characterList {
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px
  }

  .characterCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f4e8c1;
    background: #323031;
    width: 220px;
    height: 220px;
    padding: 24px 8px;
    box-sizing: border-box;
    margin-right: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: transform .3s ease;
  }

  .characterCard:hover {
    transform: translateY(-10px);
  }

  .characterCard__name {
    font-size: 26px;
    font-weight: 700;
    color: #2b2d42ff;
    color: #fef5ef;
  }

  .characterCard__from {
    margin: 8px 32px;
    padding: 4px;
    border-radius: 8px;
    font-size: 20px;
  }

  .characterCard__from_vtm{
    background: #D52941;
    color: #fff;
  }

  .characterCard__from_wta{
    background: #679436;
    color: #fff;
  }

  .characterCard__from_mta{
    background: #7F0799;
    color: #fff;
  }

  .characterCard__from_dtf{
    background: #FFB400;
    color: #323031;
  }

  .characterCard__city {
    background: #3777FF;
    color: #fff;
    margin: 0px 32px;
    padding: 4px;
    border-radius: 8px;
    font-size: 20px;
  }
</style>


<CharactersSystemFilter 
  filterValue={ systemFilter }
  selectSystemFilter={ selectSystemFilter }
  />
<div class="characterList">
  { #each 
    Object.values(chars)
    .sort((a, b) => a.name > b. name ? 1 : -1)
    .filter(item => systemFilter ? item.from == systemFilter : item)
    as 
    ch (ch.name) 
  }
  <div class="characterCard" on:click="{ () => characterStore.set(ch) }">
    <span class="characterCard__name">{ ch.name }{#if ch.player}*{/if}</span>
    <span 
      class="characterCard__from"
      class:characterCard__from_vtm={ ch.from == 'vtm' }
      class:characterCard__from_wta={ ch.from == 'wta' }
      class:characterCard__from_mta={ ch.from == 'mta' }
      class:characterCard__from_dtf={ ch.from == 'dtf' }
    >
    { getSystem(ch.from) }
    </span>
    <span class="characterCard__city">{ ch.city }</span>
  </div>
  { /each }
</div>