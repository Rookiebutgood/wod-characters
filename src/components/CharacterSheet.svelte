<script lang="ts">
  import type { Sheet } from '../types/sheet'
  import CharacterPoints from './CharacterPoints.svelte'

  export let sheet: Sheet
</script>

<style>
  .CharacterSheet__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .CharacterSheet__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .CharacterSheet__blockName {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .CharacterSheet__columnName {
    display: inline-block;
    width: 100%;
    font-size: 22px;
    text-align: center;
    margin-bottom: 8px;
  }
</style>

<div class="CharacterSheet">
  <div class="CharacterSheet__block">
    <span class="CharacterSheet__blockName">Атрибуты</span>
    <div class="CharacterSheet__row">
      <div class="CharacterSheet__column">
        <span class="CharacterSheet__columnName">Физические</span>
        {#each Object.entries(sheet.attributes.physical) as physical }
          <CharacterPoints data={ physical }/>
        {/each}
      </div>
      <div>
        <span class="CharacterSheet__columnName">Социальные</span>
        {#each Object.entries(sheet.attributes.social) as social }
          <CharacterPoints data={ social }/>
        {/each}
      </div>
      <div>
        <span class="CharacterSheet__columnName">Ментальные</span>
        {#each Object.entries(sheet.attributes.mental) as mental }
          <CharacterPoints data={ mental }/>
        {/each}
      </div>
    </div>
  </div>
  <div class="CharacterSheet__block">
    <span class="CharacterSheet__blockName">Способности</span>
    <div class="CharacterSheet__row">
      <div class="CharacterSheet__column">
        <span class="CharacterSheet__columnName">Таланты</span>
        {#each Object.entries(sheet.abilities.talents) as talents }
          <CharacterPoints data={ talents }/>
        {/each}
      </div>
      <div class="CharacterSheet__column">
        <span class="CharacterSheet__columnName">Навыки</span>
        {#each Object.entries(sheet.abilities.skills) as skills }
          <CharacterPoints data={ skills }/>
        {/each}
      </div>
      <div class="CharacterSheet__column">
        <span class="CharacterSheet__columnName">Познания</span>
        {#each Object.entries(sheet.abilities.knowledges) as knowledges }
          <CharacterPoints data={ knowledges }/>
        {/each}
      </div>
    </div>
  </div>
  <div class="CharacterSheet__block">
    <span class="CharacterSheet__blockName">Преимущества</span>
      <div class="CharacterSheet__row">
        <div class="CharacterSheet__column">
          <span class="CharacterSheet__columnName">Дополнения</span>
          {#each Object.entries(sheet.advantages.backgrounds) as backgrounds }
            <CharacterPoints data={ backgrounds }/>
          {/each}
        </div>
        <div class="CharacterSheet__column">
          <span class="CharacterSheet__columnName">Дисциплины</span>
          {#each Object.entries(sheet.advantages.disciplines) as disciplines }
            <CharacterPoints data={ disciplines }/>
          {/each}
        </div>
        <div class="CharacterSheet__column">
          <span class="CharacterSheet__columnName">Добродетели</span>
          {#each Object.entries(sheet.advantages.virtues) as virtues }
            <CharacterPoints data={ virtues }/>
          {/each}
        </div>
      </div>
  </div>
</div>