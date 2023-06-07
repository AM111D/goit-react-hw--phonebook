import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../Filter/filterSelectors';

export const getContacts = state => state.contacts.contacts;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
  [getContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
