import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  isError: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, actions) => {
      state.currentUser = actions.payload;
      state.isFetching = false;
    },
    registerSuccess: (state, actions) => {
      state.currentUser = actions.payload;
      state.isFetching = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isError = false;
      state.isFetching = false;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerFailure,
  registerStart,
  registerSuccess,
} = userSlice.actions;
export default userSlice.reducer;
