import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authenticationSlice.js";
import postReducer from "../features/postSlice.js";
import userReducer from "../features/userSlice.js";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    post: postReducer,
    user: userReducer,
  },
});
