import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = JSON.parse(await readContacts());
    return data;
  } catch (e) {
    console.error(e);
  }
};

console.log(await getAllContacts());
