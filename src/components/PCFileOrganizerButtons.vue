<template>
  <div class="file-organizer-buttons">
    <button class="file-organizer-buttons__button file-organizer-buttons__mediaplans">
      Медиапланы
      <img
        v-show="isMediaplanDone"
        alt="готово"
        class="file-organizer-buttons__check-mark"
        src="@/assets/img/check-mark.svg"
        width="16"
        height="16"
      />
    </button>

    <button class="file-organizer-buttons__button file-organizer-buttons__reports">
      Отчеты
      <img
        v-show="isReportDone"
        alt="готово"
        class="file-organizer-buttons__check-mark"
        src="@/assets/img/check-mark.svg"
        width="16"
        height="16"
      />
    </button>
  </div>
</template>

<script setup>
defineProps({
  isMediaplanDone: Boolean,
  isReportDone: Boolean,
});
</script>

<style lang="scss">
.file-organizer-buttons {
  padding: 10px 20px;
  display: flex;
  background-color: var(--pc-c-primary-background);

  &__button {
    padding: 12px;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    font-weight: 500;
    background-color: var(--pc-c-light-gray);
  }

  &__mediaplans {
    margin-right: 12px;

    &--not-empty {
      margin-right: 12px;
      border: 1px solid var(--pc-c-primary-color);
      background-color: var(--pc-c-primary-background);
    }
  }

  &__reports--not-empty {
    border: 1px solid var(--pc-c-accent-color);
    background-color: var(--pc-c-primary-background);
  }

  &__check-mark {
    margin-left: 10px;
  }
}

@media (min-width: 768px) {
  .file-organizer-buttons {
    display: none;
  }
}
</style>
