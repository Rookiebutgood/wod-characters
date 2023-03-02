<script lang="ts">
  import characterStore from '../store/character'
  import CharacterSheet from './CharacterSheet.svelte'
  import type { Character } from '../types/character'

	let character: Character

	characterStore.subscribe(value => character = value)
</script>

<style>
  .CharacterPage {
    width: 100%;
    display: flex;
    padding: 24px;
    box-sizing: border-box;
    color: #2b2d42;
    background: #f4e8c1;
    color: #fef5ef;
    background: #323031;
    border-radius: 8px;
  }
  .CharacterPage__left {
    width: 30%;
  }
  .CharacterPage__info {
    padding-left: 24px;
    padding-bottom: 8px;
    margin-right: 24px;
    border-bottom: 1px solid #2b2d42;
    border-bottom: 1px solid #fef5ef;
  }
  .CharacterPage__description {
    padding-top: 16px;
    margin-right: 24px;
  }
  .CharacterPage__right {
    width: 65%;
    border-left: 1px solid;
    padding-left: 24px;
  }
  .CharacterPage__title {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
  }
  .CharacterPage__list {
    list-style: none;
  }
  .CharacterPage__item {
    font-size: 18x;
    margin-bottom: 4px;
  }
  
</style>


<div class="CharacterPage">
  {#if character.sheet }
  <div class="CharacterPage__left">
    <div class="CharacterPage__info">
      <h2 class="CharacterPage__title">
        { character.name }
      </h2>
      <ul class="CharacterPage__list">
        <li class="CharacterPage__item">Откуда: { character.from }</li>
        <li class="CharacterPage__item">Город: { character.city }</li>
        {#if character.from == 'vtm'}
          <li class="CharacterPage__item">Клан: { character.sheet.personal.clan }</li>
          <li class="CharacterPage__item">Поколение: { character.sheet.personal.generation }</li>
        {/if}
        {#if character.from == 'dtf'}
          <li class="CharacterPage__item">Дом: { character.sheet.personal.house }</li>
        {/if}
      </ul>
    </div>
    <div class="CharacterPage__description">
      <h2 class="CharacterPage__title">Описание</h2>
      <p>{ character.description }</p>
    </div>
  </div>
  <div class="CharacterPage__right">
    <CharacterSheet sheet={ character.sheet } />
  </div>
  {/if}
</div>