import React from 'react';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from './store/Auth/authSelectors';

function AppBar() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
    },
  };

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
