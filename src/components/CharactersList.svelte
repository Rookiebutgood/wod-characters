<script lang="ts">
  import * as chars from '../data/vtm'  
  import characterStore from '../store/character'
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
    background: #f4e8c1ff;
    width: 190px;
    height: 190px;
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
  }

  .characterCard__from {
    background: #D52941;
    color: #fff;
    margin: 8px 32px;
    padding: 4px;
    border-radius: 8px;
  }

  .characterCard__city {
    background: #3777FF;
    color: #fff;
    margin: 0px 32px;
    padding: 4px;
    border-radius: 8px;
  }
</style>

<div class="characterList">
  { #each Object.values(chars).sort((a, b) => a.name > b. name ? 1 : -1) as ch (ch.name) }
  <div class="characterCard" on:click="{ () => characterStore.set(ch) }">
    <span class="characterCard__name">{ ch.name }{#if ch.player}*{/if}</span>
    <span class="characterCard__from">{ ch.from }</span>
    <span class="characterCard__city">{ ch.city }</span>
  </div>
  { /each }
</div>