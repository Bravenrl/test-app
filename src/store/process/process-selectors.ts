import { Reducer } from '../../config/store.config';
import { Contact } from '../../types/data.types';
import { TypeRootState } from '../root-reducer';

export const getIsModalAuthOpen = (state: TypeRootState): boolean =>
  state[Reducer.Process].isModalAuthOpen;

export const getIsModalContactOpen = (state: TypeRootState): boolean =>
  state[Reducer.Process].isModalContactOpen;

export const getCurrentContact = (state: TypeRootState): Contact =>
  state[Reducer.Process].currentContact;

export const getSearchTerm = (state: TypeRootState): string =>
  state[Reducer.Process].searchTerm;
