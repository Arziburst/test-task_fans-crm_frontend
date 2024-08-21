// Slice
import { initialState } from './slice';
import { BaseContact } from '../typedTools';

// Types
import * as types from './types';

export const setProfile: BaseContact<types.ProfileState, types.Profile> = (state, action) => {
  return {
    ...state,
    data: action.payload
  };
}

export const setToken: BaseContact<types.ProfileState, string> = (state, action) => {
  return {
    ...state,
    token: action.payload
  };
}

export const resetProfile = () => initialState;
