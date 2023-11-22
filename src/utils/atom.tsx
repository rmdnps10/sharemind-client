import { atom } from 'recoil';

export const deleteConsultId = atom({
  key: 'deleteConsultId',
  default: 0,
});

export const clickedDeleteEmail = atom({
  key: 'clickedDeleteEmail',
  default: '',
});
