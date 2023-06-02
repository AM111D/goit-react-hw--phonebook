import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.fetchCurrentUser.fulfilled](state, action) {
      // state.user = {...action.payload};
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { registerUser, loginUser } from './authOperation';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(registerUser.fulfilled, (state, action) => {
//         const { user, token } = action.payload;
//         state.user = user;
//         state.token = token;
//         state.isLoggedIn = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const { user, token } = action.payload;
//         state.user = user;
//         state.token = token;
//         state.isLoggedIn = true;
//       });
//   },
// });

// export const { contactExists } = authSlice.actions;
// export default authSlice.reducer;
