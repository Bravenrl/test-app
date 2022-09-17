import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../api/contactsApi';
import { RootReducer } from './root-reducer';

export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
