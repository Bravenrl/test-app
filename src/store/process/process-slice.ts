import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../config/store.config';
import { ContactNew } from '../../types/data.types';
import { ProcessInitialState } from '../../types/store.types';

const initialState: ProcessInitialState = {
  isModalAuthOpen: false,
  isModalContactOpen: false,
  currentContact: {} as ContactNew,
  searchTerm: '',
};

export const processSlice = createSlice({
  name: Slice.AppProcess,
  initialState,
  reducers: {
    toggleModalAuth: (state) => {
      state.isModalAuthOpen = !state.isModalAuthOpen;
    },
    toggleModalContact: (state) => {
      state.isModalContactOpen = !state.isModalContactOpen;
    },
    closeAllModals: (state) => {
      state.isModalAuthOpen = false;
      state.isModalContactOpen = false;
      state.currentContact = {} as ContactNew;
    },
    setCurrentContact: (state, { payload }: PayloadAction<ContactNew>) => {
      state.currentContact = payload;
    },
    clearCurrentContact: (state) => {
      state.currentContact = {} as ContactNew;
    },
    setSearchTerm: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
  },
});

export const { reducer: processReducer, actions: processActions } =
  processSlice;
