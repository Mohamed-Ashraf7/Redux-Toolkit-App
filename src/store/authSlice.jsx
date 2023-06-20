import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "login",
  initialState: { login: false },
  reducers: {
    isLogged: (state, action) => {
      state.login = !state.login;
    },
  },
});

export const { isLogged } = authSlice.actions;
export default authSlice.reducer;
