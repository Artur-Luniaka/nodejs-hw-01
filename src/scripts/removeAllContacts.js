import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = JSON.parse(await readContacts());
    writeContacts((data.length = []));
  } catch (e) {
    console.error(e);
  }
};

removeAllContacts();
