import { createSlice } from '@reduxjs/toolkit';
import { Slice } from '../../config/store.config';
import { UserInitialState } from '../../types/store.types';
import { login, registration } from './user-thunk-actions';

const initialState: UserInitialState = {
  user: '',
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: Slice.AppUser,
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(registration.rejected, (state, { error }) => {
        state.isLoading = false;
        state.user = '';
        state.error = error.message;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
