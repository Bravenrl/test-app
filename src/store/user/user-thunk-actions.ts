import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunk } from '../../config/store.config';
import { AuthService } from '../../services/auth.service';
import { AuthDataReq } from '../../types/data.types';

export const registration = createAsyncThunk<string, AuthDataReq>(
  AsyncThunk.Registration,
  async (reqData, thunkApi) => {
    try {
      const { data } = await AuthService.registration(reqData);
      const { user } = data;
      return user.email;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<string, AuthDataReq>(
  AsyncThunk.Login,
  async (reqData, thunkApi) => {
    try {
      const { data } = await AuthService.login(reqData);
      const { user } = data;
      return user.email;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
