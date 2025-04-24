<template>
  <div class="file-list__wrapper">
    <div class="file-list__header">
      <h3 class="file-list__title">{{ text.title }}</h3>
      <button @click="toggleList">
        <img
          src="@/assets/img/simple-arrow.svg"
          alt="стрелка"
          width="24"
          height="24"
          :class="toggleIconClass"
        />
      </button>
    </div>

    <ul v-show="isListExpanded" class="file-list">
      <li v-if="recentFile" class="file-list__file file-list__resent-file" :key="recentFile.id">
        <div class="file-list__file-name">
          <img
            src="@/assets/img/xml-folder.svg"
            alt="папка"
            class="file-list__file-icon"
            width="24"
            height="24"
          />
          <span>{{ recentFile.name }}</span>
        </div>

        <button :class="recentFileParams.buttonClass" :disabled="recentFileParams.isDisabled">
          <img
            alt="скачать"
            width="24"
            height="24"
            :class="{ 'file-list__download-icon': props.recentFile?.isInProgress }"
            :src="recentFileParams.icon"
          />
        </button>

        <div class="file-list__resent-file-tip">
          <img :src="recentFileParams.tipIcon" alt="статус" width="16" height="16" />
          <span>{{ recentFileParams.tipText }}</span>
        </div>
      </li>

      <li class="file-list__file" :key="file.id" v-for="file in visibleItems">
        <div class="file-list__file-name">
          <img
            src="@/assets/img/xml-folder.svg"
            alt="папка"
            class="file-list__file-icon"
            width="24"
            height="24"
          />
          <span>{{ file.name }}</span>
        </div>

        <button class="file-list__download-button">
          <img
            src="@/assets/img/arrow-down.svg"
            alt="скачать"
            class="file-list__download-icon"
            width="24"
            height="24"
          />
        </button>
      </li>

      <li v-if="showMoreButtonVisible" class="file-list__show-more">
        <button class="file-list__show-more-button" @click="showMoreItems">Показать еще</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import loadingIcon from '@/assets/img/loading.svg';
import downloadIcon from '@/assets/img/arrow-down.svg';
import checkMarkIcon from '@/assets/img/check-mark.svg';
import attentionIcon from '@/assets/img/attention-icon.svg';
import { FILES_SECTION_TEXT } from '@/shared/constants';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  text: {
    type: Object,
    default: () => FILES_SECTION_TEXT.forMediaplans,
  },
  recentFile: {
    type: Object,
    default: () => ({}),
  },
  itemsPerPage: {
    type: Number,
    default: 3,
  },
});

const isListExpanded = ref(true);
const visibleItems = ref([]);

const reversedList = computed(() => {
  if (!props.list || !Array.isArray(props.list)) {
    return [];
  }

  return [...props.list].reverse();
});
const showMoreButtonVisible = computed(() => visibleItems.value.length < reversedList.value.length);
const toggleIconClass = computed(() =>
  isListExpanded.value
    ? 'file-list__toggle-list-icon file-list__toggle-list-icon--rotated'
    : 'file-list__toggle-list-icon'
);
const recentFileParams = computed(() =>
  props.recentFile?.isInProgress
    ? {
        icon: loadingIcon,
        buttonClass: 'file-list__download-button file-list__download-button--loading',
        tipText: props.text.tipTextInProgress,
        tipIcon: attentionIcon,
        isDisabled: true,
      }
    : {
        icon: downloadIcon,
        buttonClass: 'file-list__download-button',
        tipText: `${props.text.tipText} от ${props.recentFile.date} готов`,
        tipIcon: checkMarkIcon,
        isDisabled: false,
      }
);

const toggleList = () => {
  isListExpanded.value = !isListExpanded.value;
};

const initializeVisibleItems = () => {
  if (!reversedList.value || !Array.isArray(reversedList.value)) return;
  visibleItems.value = reversedList.value.slice(0, props.itemsPerPage);
};

const showMoreItems = () => {
  if (!reversedList.value || !Array.isArray(reversedList.value)) return;

  const nextItems = reversedList.value.slice(
    visibleItems.value.length,
    visibleItems.value.length + props.itemsPerPage
  );
  visibleItems.value = [...visibleItems.value, ...nextItems];
};

watch(
  () => props.list,
  () => {
    initializeVisibleItems(); // Перезапускаем инициализацию при изменении списка
  },
  { immediate: true } // Инициализация происходит сразу при монтировании
);
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .file-list {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 8px;

    &__header {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      font-weight: 550;
      font-size: 18px;
    }

    &__toggle-list-icon--rotated {
      transform: rotate(180deg);
    }

    &__resent-file {
      position: relative;
      margin-bottom: 24px;
    }

    &__resent-file-tip {
      position: absolute;
      display: flex;
      align-items: center;
      left: 0;
      top: 48px;
      font-size: 12px;
      line-height: normal;
      color: var(--pc-c-secondary-font-color);

      & img {
        margin-right: 5px;
      }
    }

    &__file {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;
      background-color: var(--pc-c-secondary-background);
      width: 100%;
    }

    &__file-icon {
      margin-right: 9px;
    }

    &__file-name {
      padding: 9px 20px 9px 9px;
      display: flex;
      align-items: center;
      min-width: 0;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
      }
    }

    &__download-button,
    &__toggle-list-button {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }

    &__download-button {
      flex-shrink: 0;
      background-color: var(--pc-c-elements-color);
    }

    &__download-button--loading {
      background-color: var(--pc-c-gray);

      & img {
        animation: rotateAnimation 2s linear infinite;
      }
    }

    &__show-more {
      display: inline-flex;
      justify-content: flex-end;
      margin-top: 4px;
    }

    &__show-more-button {
      font-size: 15px;
      color: var(--pc-c-primary-color);

      &:hover {
        color: var(--pc-c-accent-color);
      }
    }
  }
}

@media (min-width: 992px) {
  .file-list {
    &__file-name {
      span {
        max-width: 146px;
      }
    }
  }
}
</style>
