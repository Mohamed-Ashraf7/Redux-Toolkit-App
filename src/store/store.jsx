import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import authSlice from "./authSlice";
const store = configureStore({
  reducer: {
    Books: bookSlice,
    Login: authSlice,
  },
});
export default store;
