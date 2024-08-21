// Core
import { createSlice } from "@reduxjs/toolkit";

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState: types.AuthState = {
    authStatus: 'logged-out',
    token: null
};

//TODO selectors types
export const authSlice = createSlice<types.AuthState, typeof reducers, "auth", any>({
    name: "auth",
    initialState,
    reducers,
});

export const sliceName = authSlice.name;
export const authActions = authSlice.actions;
export default authSlice.reducer;
