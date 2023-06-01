import operations from 'components/store/Auth/authOperation';
import authSelectors from 'components/store/Auth/authSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div>
      <img alt="" width="32" />
      <span>Добро пожаловать,</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </div>
  );
}

export default UserMenu;
