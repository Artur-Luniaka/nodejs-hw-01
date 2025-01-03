import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = JSON.parse(await readContacts());
    return data.length;
  } catch (e) {
    console.error(e);
  }
};

console.log(await countContacts());
