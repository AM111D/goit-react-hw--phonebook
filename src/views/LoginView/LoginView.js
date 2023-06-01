import operations from 'components/store/Auth/authOperation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './LoginView.module.css';

function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LogIn</h1>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className={css.contactInput}
          id="email"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          // pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          title="Phone email must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className={css.contactInput}
          id="password"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          // pattern="^[a-zA-Z0-9]{6,}$"
          title="Phone password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactButton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginView;
