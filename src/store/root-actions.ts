import { processActions } from './process/process-slice';
import { userActions } from './user/user-slice';
import * as userThunkActions from './user/user-thunk-actions';

export const RootActions = {
  ...userThunkActions,
  ...userActions,
  ...processActions,
};
