<template>
  <div class="file-organizer">
    <PCFileOrganizerButtons :files-store="filesStore" />

    <section class="file-organizer__wrapper">
      <h2 class="file-organizer__title">Файлы</h2>
      <div v-if="isFileListEmpty" class="file-organizer__tip">
        <img
          alt="папка с файлами"
          class="file-organizer__hero-img"
          src="@/assets/img/files-img.svg"
          width="248"
          height="304"
        />

        <p class="file-organizer__text">
          Закажи у личного помощника медиаплан. Он появится в этом разделе
        </p>
      </div>

      <div v-else class="file-organizer__lists">
        <PCFileList
          :list="mediaplans"
          :text="FILES_SECTION_TEXT.forMediaplans"
          :recent-file="resentMediaplan"
        />
        <PCFileList
          :list="reports"
          :text="FILES_SECTION_TEXT.forReports"
          :recent-file="resentReport"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import PCFileOrganizerButtons from '@/components/PCFileOrganizerButtons.vue';
import PCFileList from '@/components/PCFileList.vue';
import { FILES_SECTION_TEXT } from '@/shared/constants';
import { useFilesStore } from '@/store/files';

const filesStore = useFilesStore();
const { mediaplans, reports, resentMediaplan, resentReport } = storeToRefs(filesStore);

const isFileListEmpty = computed(
  () =>
    !(
      mediaplans.value?.length ||
      reports.value?.length ||
      resentMediaplan.value ||
      resentReport.value
    )
);
</script>

<style lang="scss">
.file-organizer {
  &__wrapper {
    display: none;
  }
}

@media (min-width: 768px) {
  .file-organizer {
    &__wrapper {
      padding: 30px 20px;
      display: block;
      height: 100%;
      border-radius: 20px;
      background-color: var(--pc-c-primary-background);
    }

    &__title {
      margin-bottom: 20px;
    }

    &__tip {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 522px;
    }

    &__lists {
      display: grid;
      grid-template: 1fr / 1fr 1fr;
      column-gap: 20px;
    }
  }
}

@media (min-width: 992px) {
  .file-organizer {
    &__wrapper {
      width: 293px;
    }

    &__hero-img {
      margin-bottom: 30px;
      width: 261px;
      height: 413px;
    }

    &__title {
      margin-bottom: 30px;
    }

    &__tip {
      margin-top: 46px;
      flex-direction: column;
      max-width: 261px;
      text-align: center;
    }

    &__hero-img {
      width: 256px;
      height: 314px;
    }

    &__lists {
      display: grid;
      grid-template: auto auto / 253px;
      row-gap: 30px;
    }
  }
}
</style>
