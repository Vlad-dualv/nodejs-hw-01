import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactList = await readContacts();
  if (contactList.length > 0) {
    const lastContact = contactList.pop();
    console.log('Removed contact:', lastContact);
    await writeContacts();
  } else {
    console.log('No contacts to remove');
  }
};

removeLastContact();
