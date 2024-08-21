// Core
import { configureStore, combineSlices } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

// Reducers
import {authSlice} from '../../redux/auth/slice';
import {profileSlice} from '../../redux/profile/slice';
import {togglesSlice} from '../../redux/client/toggles';


// Middleware
import { middleware } from './middleware';


const rootReducer = combineSlices(
  togglesSlice,
  authSlice,
  profileSlice
);

export const makeStore = () => {
    return configureStore({
      devTools: process.env.NODE_ENV === "development",
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
    });
};

export const reduxStore = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
ThunkReturnType,
RootState,
unknown,
Action
>;
