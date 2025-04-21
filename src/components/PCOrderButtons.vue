<template>
  <div class="order-buttons">
    <button class="order-buttons__button order-buttons__report-button">Заказать отчет</button>
    <button class="order-buttons__button order-buttons__mediaplan-button">
      Заказать медиаплан
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss">
.order-buttons {
  margin: 20px 16px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__button {
    padding: 12px 22px;
    width: max-content;
    font-weight: 550;
    color: var(--pc-c-elemens-font-color);
    border-radius: 21px;
    background-color: var(--pc-c-primary-color);
  }

  &__report-button {
    margin: 0 0 12px 0;
    background-color: var(--pc-c-accent-color);
  }
}

@media (min-width: 768px) {
  .order-buttons {
    flex-direction: row;

    &__report-button {
      margin: 0 0 0 12px;
      order: 2;
    }
  }
}
</style>
