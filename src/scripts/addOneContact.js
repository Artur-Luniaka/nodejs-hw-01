import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (contact = createFakeContact()) => {
  try {
    const data = JSON.parse(await readContacts());
    data.push(contact);
    writeContacts(data);
  } catch (e) {
    console.error(e);
  }
};

addOneContact();
