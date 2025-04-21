<template>
  <PCContentWrapper>
    <div class="content">
      <h1 class="content__title">Pink Chicken</h1>
      <PCFileOrganizer class="content__organaizer" />
      <PCPersonalHelper />
    </div>
  </PCContentWrapper>
</template>

<script setup>
import PCContentWrapper from '@/components/PCContentWrapper.vue';
import PCFileOrganizer from '@/components/PCFileOrganizer.vue';
import PCPersonalHelper from '@/components/PCPersonalHelper.vue';
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__title {
    display: none;
  }
}

@media (min-width: 768px) {
  .content {
    padding-bottom: 60px;

    &__organaizer {
      margin: 0 0 20px 0;
    }
  }
}

@media (min-width: 992px) {
  .content {
    flex-direction: row;

    &__organaizer {
      margin: 0 30px 0 0;
    }
  }
}
</style>
