import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'components/store/Contacts/operation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsView;
