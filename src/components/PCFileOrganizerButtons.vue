<template>
  <div class="file-organizer-buttons">
    <button :class="mediaplanParams.class">
      Медиапланы
      <img
        v-show="mediaplanParams.showDoneIcon"
        alt="готово"
        class="file-organizer-buttons__check-mark"
        src="@/assets/img/check-mark.svg"
        width="16"
        height="16"
      />

      <img
        v-show="mediaplanParams.showLoadingIcon"
        alt="загрузка"
        class="file-organizer-buttons__loading"
        src="@/assets/img/loading.svg"
        width="16"
        height="16"
      />
    </button>

    <button :class="reportParams.class">
      Отчеты
      <img
        v-show="reportParams.showDoneIcon"
        alt="готово"
        class="file-organizer-buttons__check-mark"
        src="@/assets/img/check-mark.svg"
        width="16"
        height="16"
      />

      <img
        v-show="reportParams.showLoadingIcon"
        alt="загрузка"
        class="file-organizer-buttons__loading"
        src="@/assets/img/loading.svg"
        width="16"
        height="16"
      />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  filesStore: Object,
});

const isListNotEmpty = computed(() => ({
  mediaplans: props.filesStore.mediaplans?.length || props.filesStore.resentMediaplan,
  reports: props.filesStore.reports?.length || props.filesStore.resentReport,
}));

const getFileListParams = (listType, resentType) => {
  const resentFile = props.filesStore[resentType];
  const fileList = props.filesStore[listType];

  return {
    isNotEmpty: fileList?.length || resentFile,
    showDoneIcon: resentFile && !resentFile.isInProgress,
    showLoadingIcon: resentFile?.isInProgress,
    class: `file-organizer-buttons__button file-organizer-buttons__${listType} ${
      isListNotEmpty.value[listType] ? `file-organizer-buttons__${listType}--not-empty` : ''
    }`,
  };
};

const mediaplanParams = computed(() => getFileListParams('mediaplans', 'resentMediaplan'));
const reportParams = computed(() => getFileListParams('reports', 'resentReport'));
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

  &__loading {
    margin-left: 10px;
    filter: invert(50%);
    animation: rotateAnimation 2s linear infinite;
  }
}

@media (min-width: 768px) {
  .file-organizer-buttons {
    display: none;
  }
}
</style>
