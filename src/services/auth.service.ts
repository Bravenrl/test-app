import { api } from '../api/api';
import { ApiRoutes } from '../config/api.config';
import { AuthDataReq, AuthDataRes } from '../types/data.types';

export const AuthService = {
  async registration(reqData: AuthDataReq) {
    return await api.post<AuthDataRes>(ApiRoutes.Users, reqData);
  },

  async login(reqData: AuthDataReq) {
    return await api.post<AuthDataRes>(ApiRoutes.Login, reqData);
  },
};
