<template>
  <PCHeader />

  <main>
    <PCContentWrapper></PCContentWrapper>
  </main>

  <PCFooter :locales="locales" />
</template>

<script setup>
import { ref } from 'vue';

import PCHeader from '@/components/PCHeader.vue';
import PCContentWrapper from '@/components/PCContentWrapper.vue';
import PCFooter from '@/components/PCFooter.vue';

const locales = ref([
  { name: 'RU', isActive: true },
  { name: 'EN', isActive: false },
  { name: 'TUR', isActive: false },
]);
</script>

<style scoped></style>
