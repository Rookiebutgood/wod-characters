<style>
  .page {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 28px 42px;
    background: #331e38ff;
    box-sizing: border-box;
  }

  .page__content {
    width: 1200px;
    margin: 0 auto;
  }

  .header__list {
    list-style: none;
    display: flex;
    margin: 24px 0;
  }

  .header__item {
    border: 3px solid #f4e8c1;
    color: #f4e8c1;
    font-size: 22px;
    font-weight: 700;
    padding: 4px;
    cursor: pointer;
    transition: padding .2s ease-in;
  }

  .header__item:hover {
    padding: 4px 16px;
  }

  .header__item:not(:first-child) {
    margin-left: 8px;
  }

  .header__item_disable {
    text-decoration: line-through;
  }
  .pageTitle {
    font-size: 48px;
    color: #f4e8c1;
    margin-bottom: 16px;
  }

</style>

<div class="page">
  <div class="page__content">
    <div class="header">
      <h1 class="pageTitle">Персонажи</h1>
      <ul class="header__list">
        <li class="header__item">Вампиры</li>
        <li class="header__item header__item_disable">Оборотни</li>
        <li class="header__item">Маги</li>
        <li class="header__item">Демоны</li>
      </ul>
    </div>
    <slot></slot>
  </div>
</div>
