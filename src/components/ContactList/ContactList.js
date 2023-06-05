import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../store/Contacts/selectors';
import { selectFilter } from 'components/store/Filter/filterSelectors';
import { deleteContact, fetchContacts } from '../store/Contacts/operation';
import operations from 'components/store/Auth/authOperation';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(selectFilter);

  // useEffect(() => {
  //   dispatch(operations.fetchContacts());
  // }, [dispatch]);
  // console.dir(filter);

  // useEffect(() => {
  //   dispatch(operations.fetchCurrentUser());
  // }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactlist}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.contactElement} key={contact.id}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button
              className={css.button}
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
