import { MOCK_FILE_TEXT } from '@/shared/constants';
import formatDate from '@/utils/formatDate';
import sendMockRequest from '@/utils/sendMockRequest';
import { defineStore } from 'pinia';

export const useFilesStore = defineStore('files', {
  state: () => {
    return {
      mediaplans: [],
      resentMediaplan: null,
      reports: [],
      resentReport: null,
    };
  },

  actions: {
    async addResentFile(type, newName = 'Companyname') {
      const filesKey = type === 'mediaplan' ? 'mediaplans' : 'reports';
      const resentKey = type === 'mediaplan' ? 'resentMediaplan' : 'resentReport';
      const date = formatDate();
      let filesLength = this[filesKey]?.length || 0;

      if (this[resentKey]) {
        this[filesKey] = [...this[filesKey], this[resentKey]];
        filesLength += 1;
      }

      const name = `${newName} ${filesLength + 1}/${new Date().getFullYear() % 100}`;
      const newFile = {
        id: Date.now(),
        name,
        text: null,
        isInProgress: true,
      };

      try {
        this[resentKey] = newFile;

        await sendMockRequest();

        this[resentKey] = {
          ...this[resentKey],
          date,
          text: MOCK_FILE_TEXT,
          isInProgress: false,
        };
      } catch (e) {
        throw new Error(e.message);
      }
    },

    async addResentMediaplan() {
      await this.addResentFile('mediaplan');
    },

    async addResentReport() {
      await this.addResentFile('report');
    },
  },
});

// Т.к. проект не на ts, оставлю подсказку типизации store на JSDoc
/**
 * @typedef {Object} File
 * @property {number} id - Уникальный идентификатор файла
 * @property {string} name - Название файла
 * @property {string} text - Текстовое содержимое файла
 * @property {boolean} isInProgress - Флаг, указывающий, находится ли файл в процессе загрузки
 * @property {string} date - Дата создания файла в формате "дд.мм.гг"
 */
/**
 * @typedef {Object} FilesState
 * @property {File[]} mediaplans - Массив медиапланов
 * @property {File|null} resentMediaplan - Последний добавленный медиаплан
 * @property {File[]} reports - Массив отчетов
 * @property {File|null} resentReport - Последний добавленный отчет
 */
