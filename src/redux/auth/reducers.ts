// Slice
import { initialState } from './slice';
import { BaseContact } from '../typedTools';

// Types
import * as types from './types';

export const setAuthStatus: BaseContact<types.AuthState, types.AuthStatus> = (state, action) => {
  return {
    ...state,
    authStatus: action.payload
  };
}

export const setToken: BaseContact<types.AuthState, string> = (state, action) => {
  return {
    authStatus: "logged-in",
    token: action.payload
  };
}

export const resetAuth = () => initialState;
