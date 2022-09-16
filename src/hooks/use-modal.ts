import {
  getIsModalAuthOpen,
  getIsModalContactOpen,
} from '../store/process/process-selectors';
import { useTypedSelector } from './use-typed-selector';

export const useModal = () => {
  const isModalAuthOpen = useTypedSelector(getIsModalAuthOpen);
  const isModalContactOpen = useTypedSelector(getIsModalContactOpen);

  return { isModalAuthOpen, isModalContactOpen };
};
