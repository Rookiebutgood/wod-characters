<script>
  import { translateAttribute } from "../utils/translateAttributes"

  export let data

  $: name = translateAttribute(data[0])
  $: value = data[1].value ? data[1].value : data[1]
</script>

<style>
  .CharacterPoints {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .CharacterPoints__name {
    width: 140px;
  }

  .CharacterPoints__point {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 2px solid #2b2d42;
    border-radius: 50%;
  }

  .CharacterPoints__point_fill {
    background: #2b2d42;
  }
</style>

<div class="CharacterPoints">
  <span class="CharacterPoints__name">{ name }</span>
  {#if typeof value === 'object'}
    {#each Array(value.value) as v}
      <span class="CharacterPoints__point CharacterPoints__point_fill"></span>
    {/each}
    {#each Array(5 - value.value) as v}
      <span class="CharacterPoints__point"></span>
    {/each}
  {:else}
    {#each Array(value) as v}
      <span class="CharacterPoints__point CharacterPoints__point_fill"></span>
    {/each}
    {#each Array(5 - value) as v}
      <span class="CharacterPoints__point"></span>
    {/each}
  {/if}
</div>