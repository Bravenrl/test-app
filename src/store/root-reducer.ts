import { combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from '../api/contactsApi';
import { Reducer } from '../config/store.config';
import { processReducer } from './process/process-slice';
import { userReducer } from './user/user-slice';

export const RootReducer = combineReducers({
  [Reducer.User]: userReducer,
  [Reducer.Process]: processReducer,
  [Reducer.Data]: contactsApi.reducer,
});

export type TypeRootState = ReturnType<typeof RootReducer>;
