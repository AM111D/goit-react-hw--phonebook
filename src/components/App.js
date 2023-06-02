import React, { useEffect } from 'react';
// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './store/Contacts/operation';
// import Navigation from './Navigation/Navigation';
import { Route, Router, Routes, Switch } from 'react-router-dom';
import ContactForm from './ContactForm/ContactForm';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from '../views/LoginView/LoginView';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import AppBar from './AppBar';
import HomeView from 'views/HomeView';
import ContactsView from 'views/ContactsView/ContactsView';
import operations from './store/Auth/authOperation';
// import { lazy } from 'react';

// const Navigation = lazy(() => import('./Navigation/Navigation'));
// const ContactForm = lazy(() => import('./ContactForm/ContactForm'));

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </Container>
  );
}

export default App;

//
// {/* <Routes>
// <Route path="/" element={<HomeView />}>
//   {/* <Route index element={<ContactForm />} /> */}
//   <Route path="/register" element={<RegisterView />} />
//   <Route path="/login" element={<LoginView />} />
//   <Route path="/contacts" element={<ContactList />} />
// </Route>
// </Routes> */}
//
