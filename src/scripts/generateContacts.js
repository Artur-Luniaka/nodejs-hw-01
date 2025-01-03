import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const data = JSON.parse(await readContacts());
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      data.push(contact);
    }
    writeContacts(data);
  } catch (e) {
    console.error(e);
  }
};

generateContacts(2);
