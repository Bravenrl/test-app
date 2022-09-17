import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunk } from '../../config/store.config';
import { AuthService } from '../../services/auth.service';
import { AuthDataReq } from '../../types/data.types';
import { processActions } from '../process/process-slice';

export const registration = createAsyncThunk<string, AuthDataReq>(
  AsyncThunk.Registration,
  async (reqData, thunkApi) => {
    try {
      const { data } = await AuthService.registration(reqData);
      const { user } = data;
      thunkApi.dispatch(processActions.toggleModalAuth());
      return user.email;
    } catch (error:any) {
      return thunkApi.rejectWithValue(error.response?.message);
    }
  }
);

export const login = createAsyncThunk<string, AuthDataReq>(
  AsyncThunk.Login,
  async (reqData, thunkApi) => {
    try {
      const { data } = await AuthService.login(reqData);
      const { user } = data;
      thunkApi.dispatch(processActions.toggleModalAuth());
      return user.email;
    } catch (error:any) {
      return thunkApi.rejectWithValue(error.response?.message);
    }
  }
);
