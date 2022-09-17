import { Reducer } from "../../config/store.config";
import { TypeRootState } from "../root-reducer";

export const getUser = (state: TypeRootState): string | null => state[Reducer.User].user;

export const getUserIsLoading = (state: TypeRootState): boolean => state[Reducer.User].isLoading;

export const getUserError = (state: TypeRootState): string | null | undefined | boolean=> state[Reducer.User].error;