import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.ul}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.li}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
