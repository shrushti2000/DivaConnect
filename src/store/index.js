import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authenticationSlice.js";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
