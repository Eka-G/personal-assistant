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
    async addResentFile(filesLength, resentFile, newName = 'Companyname') {
      const name = `${newName} ${filesLength + 1}/${new Date().getFullYear() % 100}`;
      const newFile = {
        id: filesLength,
        name,
        text: null,
        isInProgress: true,
      };

      try {
        resentFile = newFile;
        await sendMockRequest();
        resentFile = {
          ...resentFile,
          date: formatDate(),
          text: MOCK_FILE_TEXT,
          isInProgress: false,
        };
      } catch (e) {
        throw new Error(e.message);
      }
    },

    async addResentMediaplan() {
      await this.addFile(this.mediaplans.length, this.resentMediaplan);
    },

    async addResentReport() {
      await this.addFile(this.reports.length, this.resentReport);
    },
  },
});
