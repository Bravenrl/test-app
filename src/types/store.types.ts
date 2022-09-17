import { ContactNew } from './data.types';

export type UserInitialState = {
  user: string;
  isLoading: boolean;
  error: string | undefined | null | boolean;
};

export type ProcessInitialState = {
  isModalAuthOpen: boolean;
  isModalContactOpen: boolean;
  currentContact: ContactNew;
  searchTerm: string,
};
