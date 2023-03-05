<script lang="ts">
    export let filterValue: string
    export let selectSystemFilter: (val: string) => void
</script>
  
  <style>
    .systemFilter {
      list-style: none;
      display: flex;
      margin: 24px 0;
      padding: 0;
    }
  
    .systemFilter__item {
      color: #323031;
      border: 3px solid #323031;
      font-size: 22px;
      font-weight: 700;
      padding: 4px;
      cursor: pointer;
      transition: padding .2s ease-in;
    }
  
    .systemFilter__item:hover {
      padding: 4px 16px;
    }
  
    .systemFilter__item:not(:first-child) {
      margin-left: 8px;
    }
  
    .systemFilter__item_selected {
      background: #323031;
      color: #fef5ef;
    }
  </style>
  
  <ul class="systemFilter">
    <li
      on:click={ () => selectSystemFilter('vtm') }
      class="systemFilter__item"
      class:systemFilter__item_selected={ filterValue == 'vtm' }
    >
      Вампиры
    </li>
    <li
      on:click={ () => selectSystemFilter('wta') }
      class="systemFilter__item"
      class:systemFilter__item_selected={ filterValue == 'wta' }
    >
      Оборотни
    </li>
    <li
      on:click={ () => selectSystemFilter('mta') }
      class="systemFilter__item"
      class:systemFilter__item_selected={ filterValue == 'mta' }
    >
      Маги
    </li>
    <li
      on:click={ () => selectSystemFilter('dtf') }
      class="systemFilter__item"
      class:systemFilter__item_selected={ filterValue == 'dtf' }
    >
      Демоны
    </li>
  </ul>