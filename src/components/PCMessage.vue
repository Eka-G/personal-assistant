<template>
  <li :class="className">
    <div v-if="message.helperInfo?.avatar" class="message__avatar">
      <img :src="message.helperInfo.avatar" alt="аватар" width="36" height="36" />
    </div>
    <div class="message__content">
      <p class="message__text">{{ message.text }}</p>
      <div class="message__info">
        <span v-if="message.helperInfo?.name" class="message__helper-name">{{
          message.helperInfo.name
        }}</span>
        <span class="message__time">{{ time }}</span>
      </div>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const className = computed(() =>
  props.message.helperInfo ? 'message message--from-helper' : 'message'
);

const time = computed(() => {
  const hours = String(props.message.date.getHours()).padStart(2, '0');
  const minutes = String(props.message.date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
});
</script>

<style lang="scss" scoped>
.message {
  margin-left: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;

  &--from-helper {
    margin-left: 0;
    display: grid;
    grid-template-columns: 36px auto;
    column-gap: 10px;
    justify-content: flex-start;
  }

  &__content {
    width: fit-content;
  }

  &__text {
    padding: 14px 18px;
    font-weight: 500;
    border-radius: 12px;
    background-color: var(--pc-c-primary-background);
  }

  &__info {
    margin-top: 8px;
    font-size: 15px;
  }

  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__helper-name {
    margin-right: 9px;
    font-size: 18px;
    font-weight: 550;
  }

  &__time {
    color: var(--pc-c-secondary-font-color);
  }
}

@media (min-width: 768px) {
  .message {
    margin-bottom: 12px;

    &--from-helper {
      column-gap: 13px;
    }

    &__text {
      padding: 16px 22px;
    }
  }
}
</style>
