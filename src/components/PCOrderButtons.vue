<template>
  <div class="order-buttons">
    <button
      class="order-buttons__button order-buttons__report-button"
      :disabled="isReportOrderDisabaled"
      @click="handleReportOrder"
    >
      Заказать отчет
    </button>

    <button
      class="order-buttons__button order-buttons__mediaplan-button"
      :disabled="isMediaplanOrderDisabaled"
      @click="handleMediaplanOrder"
    >
      Заказать медиаплан
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFilesStore } from '@/store/files';

const filesStore = useFilesStore();

const isMediaplanOrderDisabaled = computed(() => filesStore.resentMediaplan?.isInProgress);
const isReportOrderDisabaled = computed(() => filesStore.resentReport?.isInProgress);

const handleMediaplanOrder = () => {
  filesStore.addResentMediaplan();
};
const handleReportOrder = () => {
  filesStore.addResentReport();
};
</script>

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

    &:disabled {
      opacity: 45%;
    }
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
