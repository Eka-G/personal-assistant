import { defineStore } from 'pinia';
import { MOCK_HELPER_INFO, MOCK_MESSAGE_TEXT } from '@/shared/constants';
import sendMockRequest from '@/utils/sendMockRequest';

const makeMessage = (text, helperInfo = null) => ({
  id: Date.now(),
  text,
  helperInfo,
  date: new Date(),
});

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [],
  }),

  actions: {
    addMessage(message) {
      this.messages = [...this.messages, message];
    },

    async sendMessage(text) {
      try {
        this.addMessage(makeMessage(text));
        await sendMockRequest();
        this.addMessage(makeMessage(MOCK_MESSAGE_TEXT, MOCK_HELPER_INFO));
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
});

// Т.к. проект не на ts, оставлю подсказку типизации store на JSDoc
/**
 * @typedef {Object} Helper
 * @property {string} name - Имя помощника
 * @property {Object | string} avatar - Аватар(путь к фото) помощника
 */
/**
 * @typedef {Object} Message
 * @property {number} id - Уникальный идентификатор сообщения
 * @property {string} text - Текст сообщения
 * @property {Helper | null} helperInfo - данные помощника, заполнено только если это сообщение от помощника
 * @property {Date} date - Дата создания сообщения (объект Date)
 */

/**
 * @type {Message[]} - в store массив объектов сообщений
 */
