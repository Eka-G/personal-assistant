<template>
  <div class="file-organizer">
    <PCFileOrganizerButtons />

    <section class="file-organizer__wrapper">
      <h2>Файлы</h2>
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

      <div v-if="!isFileListEmpty" class="file-organizer__lists">
        <PCFileList
          :list="filesStore.mediaplans"
          :text="FILES_SECTION_TEXT.forMediaplans"
          :recent-file="filesStore.resentMediaplan"
        />
        <PCFileList
          :list="filesStore.reports"
          :text="FILES_SECTION_TEXT.forReports"
          :recent-file="filesStore.resentReport"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import PCFileOrganizerButtons from '@/components/PCFileOrganizerButtons.vue';
import PCFileList from '@/components/PCFileList.vue';
import { FILES_SECTION_TEXT } from '@/shared/constants';
import { useFilesStore } from '@/store/files';
import { computed } from 'vue';

const filesStore = useFilesStore();

const isFileListEmpty = computed(
  () => !(filesStore.mediaplans?.length || filesStore.reports?.length)
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
    &__hero-img {
      margin-bottom: 30px;
      width: 261px;
      height: 413px;
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
      grid-template: auto auto / 295px;
      row-gap: 30px;
    }
  }
}
</style>
