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
    text-align: center;
    margin-bottom: 8px;
  }
</style>

<div class="CharacterSheet">
  <div class="CharacterSheet__block">
    <h2 class="CharacterSheet__blockName">Атрибуты</h2>
    <div class="CharacterSheet__row">
      <div class="CharacterSheet__column">
        <h3 class="CharacterSheet__columnName">Физические</h3>
        {#each Object.entries(sheet.attributes.physical) as physical }
          <CharacterPoints data={ physical }/>
        {/each}
      </div>
      <div>
        <h3 class="CharacterSheet__columnName">Социальные</h3>
        {#each Object.entries(sheet.attributes.social) as social }
          <CharacterPoints data={ social }/>
        {/each}
      </div>
      <div>
        <h3 class="CharacterSheet__columnName">Ментальные</h3>
        {#each Object.entries(sheet.attributes.mental) as mental }
          <CharacterPoints data={ mental }/>
        {/each}
      </div>
    </div>
  </div>
  <div class="CharacterSheet__block">
    <h2 class="CharacterSheet__blockName">Способности</h2>
    <div class="CharacterSheet__row">
      <div class="CharacterSheet__column">
        <h3 class="CharacterSheet__columnName">Таланты</h3>
        {#each Object.entries(sheet.abilities.talents) as talents }
          <CharacterPoints data={ talents }/>
        {/each}
      </div>
      <div class="CharacterSheet__column">
        <h3 class="CharacterSheet__columnName">Навыки</h3>
        {#each Object.entries(sheet.abilities.skills) as skills }
          <CharacterPoints data={ skills }/>
        {/each}
      </div>
      <div class="CharacterSheet__column">
        <h3 class="CharacterSheet__columnName">Познания</h3>
        {#each Object.entries(sheet.abilities.knowledges) as knowledges }
          <CharacterPoints data={ knowledges }/>
        {/each}
      </div>
    </div>
  </div>
  <div class="CharacterSheet__block">
    <h2 class="CharacterSheet__blockName">Преимущества</h2>
      <div class="CharacterSheet__row">
        <div class="CharacterSheet__column">
          <h3 class="CharacterSheet__columnName">Дополнения</h3>
          {#each Object.entries(sheet.advantages.backgrounds) as backgrounds }
            <CharacterPoints data={ backgrounds }/>
          {/each}
        </div>
        <div class="CharacterSheet__column">
          <h3 class="CharacterSheet__columnName">Дисциплины</h3>
          {#each Object.entries(sheet.advantages.disciplines) as disciplines }
            <CharacterPoints data={ disciplines }/>
          {/each}
        </div>
        <div class="CharacterSheet__column">
          <h3 class="CharacterSheet__columnName">Добродетели</h3>
          {#each Object.entries(sheet.advantages.virtues) as virtues }
            <CharacterPoints data={ virtues }/>
          {/each}
        </div>
      </div>
  </div>
</div>