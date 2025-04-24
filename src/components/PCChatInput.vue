<template>
  <div class="chat-input">
    <input
      v-model="messageInput"
      type="text"
      class="chat-input__input"
      placeholder="Введите сообщение для администратора"
      @keypress.enter="sendMessage"
    />

    <div class="chat-input__actions">
      <div class="chat-input__upload-actions">
        <button class="chat-input__upload-action">
          <img src="@/assets/img/folder-add.svg" alt="добавить файлы" width="24" height="24" />
        </button>

        <button class="chat-input__upload-action">
          <img src="@/assets/img/gallery.svg" alt="добавить изображение" width="24" height="24" />
        </button>
      </div>

      <div class="chat-input__enter-block">
        <button class="chat-input__send-button" @click="sendMessage">
          <img src="@/assets/img/send.svg" alt="отправить" width="24" height="24" />
        </button>
        <span>Enter</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useChatStore } from '@/store/chat';

const chatStore = useChatStore();
const messageInput = ref('');

const sendMessage = async () => {
  const formattedMessage = messageInput.value.trim();

  if (!formattedMessage) {
    return;
  }

  messageInput.value = '';
  await chatStore.sendMessage(formattedMessage);
};
</script>

<style lang="scss">
.chat-input {
  padding: 25px 16px 10px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 144px;
  border-radius: 20px;
  background-color: var(--pc-c-primary-background);

  &:focus-within {
    outline: 2px solid var(--pc-c-primary-color);
  }

  &__input {
    width: 100%;

    &:focus::placeholder {
      color: transparent;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__upload-action:first-child {
    margin-right: 20px;
  }

  &__send-button {
    padding: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--pc-c-primary-color);
  }

  &__enter-block {
    & span {
      display: none;
    }
  }
}

@media (min-width: 768px) {
  .chat-input {
    position: relative;
    margin: 2px;
    padding: 25px 40px 12px 20px;

    &--active {
      margin: 0;
    }

    &__actions {
      align-items: flex-end;
    }

    &__enter-block {
      text-align: center;

      & span {
        margin-top: 2px;
        font-size: 10px;
        display: block;
      }
    }
  }
}
</style>
