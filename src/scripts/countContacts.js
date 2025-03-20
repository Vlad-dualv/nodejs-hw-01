import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return 'Number of contacts: ' + contacts.length;
};

console.log(await countContacts());
