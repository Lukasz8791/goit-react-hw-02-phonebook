import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (newName, newNumber) => {
    const newContact = {
      id: nanoid(),
      name: newName,
      number: newNumber,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
};

export default App;
