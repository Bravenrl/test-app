import {
  getUser,
  getUserError,
  getUserIsLoading,
} from '../store/user/user-selectors';
import { useTypedSelector } from './use-typed-selector';

export const useAuth = () => {
  const user = useTypedSelector(getUser);
  const isLoading = useTypedSelector(getUserIsLoading);
  const err = useTypedSelector(getUserError);
  const isAuth = !!user;
  return { user, isLoading, err, isAuth };
};
