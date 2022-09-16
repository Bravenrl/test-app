import { Reducer } from '../../config/store.config';
import { ContactNew } from '../../types/data.types';
import { TypeRootState } from '../root-reducer';

export const getIsModalAuthOpen = (state: TypeRootState): boolean =>
  state[Reducer.Process].isModalAuthOpen;

export const getIsModalContactOpen = (state: TypeRootState): boolean =>
  state[Reducer.Process].isModalContactOpen;

export const getCurrentContact = (state: TypeRootState): ContactNew =>
  state[Reducer.Process].currentContact;
