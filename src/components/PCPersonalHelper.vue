<template>
  <section class="personal-helper">
    <div class="personal-helper__header">
      <h2 class="personal-helper__title">Личный помощник</h2>

      <div class="personal-helper__menu">
        <button class="personal-helper__menu">
          <img src="@/assets/img/dots.svg" alt="меню" height="20px" />
        </button>
      </div>

      <div class="personal-helper__user">
        <span class="personal-helper__user-name">Jim Davidson</span>
        <span>Jim Davidson@adaurum.ru</span>
      </div>
    </div>

    <div class="personal-helper__chat">
      <div class="personal-helper__chat-container">
        <div v-if="!chatStore.messages.length" class="personal-helper__chat-plug">
          <img
            class="personal-helper__img"
            src="@/assets/img/chat-img.svg"
            alt="помощник"
            width="130"
            height="132"
          />
          <p class="personal-helper__hint">
            Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе
            и узнать о ходе работы
          </p>
        </div>

        <ul v-else class="personal-helper__chat">
          <PCMessage v-for="message in chatStore.messages" :message="message" :key="message.id" />
        </ul>

        <PCOrderButtons />
      </div>
      <div class="personal-helper__input-container">
        <PCChatInput />
      </div>
    </div>
  </section>
</template>

<script setup>
import PCOrderButtons from '@/components/PCOrderButtons.vue';
import PCChatInput from '@/components/PCChatInput.vue';
import PCMessage from '@/components/PCMessage.vue';
import { useChatStore } from '@/store/chat';

const chatStore = useChatStore();
</script>

<style lang="scss">
.personal-helper {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  height: 100%;
  flex-grow: 1;

  //header
  &__header {
    padding: 20px;
    display: grid;
    align-items: center;
    grid-template-areas:
      'title menu'
      'user user';
    row-gap: 12px;
    background-color: var(--pc-c-primary-background);
  }

  &__title {
    grid-area: title;
  }

  &__menu {
    grid-area: menu;
    display: flex;
    justify-content: flex-end;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--pc-c-secondary-background);
    }
  }

  &__user {
    grid-area: user;
    color: var(--pc-c-secondary-font-color);
  }

  &__user-name {
    margin-right: 10px;
    font-weight: 550;
    color: var(--pc-c-primary-font-color);
  }

  //chat
  &__chat {
    background-color: var(--pc-c-elements-background);
  }

  &__chat-container {
    padding: 50px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
  }

  &__chat-plug {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__img {
    margin-bottom: 20px;
  }

  &__hint {
    max-width: 270px;
    text-align: center;
  }

  &__input-container {
    padding: 0 20px 30px 20px;
  }
}

@media (min-width: 768px) {
  .personal-helper {
    padding: 26px 23px 28px 28px;
    border-radius: 20px;
    background-color: var(--pc-c-primary-background);

    &__header {
      padding: 0 0 20px 0;
      grid-template-areas: 'title user menu';
      grid-template-columns: auto max-content min-content;
      column-gap: 26px;
    }

    &__chat {
      border-radius: 20px;
    }

    &__chat-container {
      padding: 55px 20px 20px 20px;
      border-radius: 20px;
    }

    &__img {
      width: 180px;
      height: 183px;
    }

    &__hint {
      max-width: 364px;
    }

    &__input-container {
      padding: 0;
    }
  }
}

@media (min-width: 992px) {
  .personal-helper {
    &__img {
      width: 190px;
      height: 193px;
    }

    &__hint {
      max-width: 470px;
    }

    &__chat-container {
      padding: 50px 20px 20px 20px;
    }
  }
}
</style>
