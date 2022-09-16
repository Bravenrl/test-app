import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from '../config/store.config';
import { processReducer } from './process/process-slice';
import { userReducer } from './user/user-slice';

export const RootReducer = combineReducers({
  [Reducer.User]: userReducer,
  [Reducer.Process]: processReducer,
});

export type TypeRootState = ReturnType<typeof RootReducer>;
