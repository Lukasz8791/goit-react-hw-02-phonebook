import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!/^\+?\d+$/.test(number)) {
      setNumberError('Insert correct number');
      return;
    }

    const existingContactWithNumber = contacts.find(
      contact => contact.number === number
    );
    if (existingContactWithNumber) {
      setNameError(
        `This number is assigned to the contact ${existingContactWithNumber.name}`
      );
      return;
    }

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setNameError('Contact with this name already exists');
      return;
    }

    addContact(name, number);
    setName('');
    setNumber('');
    setNameError('');
    setNumberError('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[^\d]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => {
            setName(e.target.value);
            setNameError('');
          }}
        />
        {nameError && <p className={styles['error-message']}>{nameError}</p>}
      </label>
      <label>
        Phone:
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => {
            setNumber(e.target.value);
            setNumberError('');
          }}
        />
        {numberError && (
          <p className={styles['error-message']}>{numberError}</p>
        )}
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
