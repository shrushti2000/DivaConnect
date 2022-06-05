import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authenticationSlice.js";
import postReducer from "../features/postSlice.js";
import {
  combineReducers,
 
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    post:postReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  },
});
