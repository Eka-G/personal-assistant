<template>
  <div class="file-list-wrapper">
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

      <li class="file-list__file" :key="file.id" v-for="file in list">
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
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

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
});

const isListExpanded = ref(true);

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

    &__toggle-list-icon--rotated {
      transform: rotate(180deg);
    }

    &__resent-file {
      position: relative;
      margin-bottom: 32px;
    }

    &__resent-file-tip {
      position: absolute;
      display: flex;
      align-items: center;
      left: 0;
      top: 54px;
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
    }

    &__file-icon {
      margin-right: 9px;
    }

    &__file-name {
      padding: 9px 20px 9px 9px;
      display: flex;
      align-items: center;
      width: -webkit-fill-available;
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
      background-color: var(--pc-c-elements-color);
    }

    &__download-button--loading {
      background-color: var(--pc-c-gray);

      & img {
        animation: rotateAnimation 2s linear infinite;
      }
    }
  }
}
</style>
