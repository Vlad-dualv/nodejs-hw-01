import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = () => {
  writeContacts([]);
  console.log('Contact list is empty');
};

removeAllContacts();
