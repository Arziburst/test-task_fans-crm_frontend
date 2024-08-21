import store from 'store2';

// Tools
import { useDispatch, useSelector } from '../../tools/hooks';

// Api
import { AuthenticationAsync, AuthorizationAsync, RegisterAsync } from "./api";

// Slice
import { authActions } from './slice';

// Redux
import {profileActions} from '../profile/slice'

import type {AuthenticationInput, RegisterInput} from './types'
import { togglesActions } from '../client/toggles';

export const useAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const register = async (input: RegisterInput) => {
      const data = await RegisterAsync(input);

      if (data?.token && data?.profile) {
        await store.set("token", data.token);
        dispatch(authActions.setToken(data.token));
        dispatch(profileActions.setProfile(data.profile))
      }
    };

    const logout = async () => {
        store.clear();
        dispatch(authActions.resetAuth());
        dispatch(profileActions.resetProfile())
    };

    const authentication = async (input: AuthenticationInput) => {
      const data = await AuthenticationAsync(input);

      if (data?.token && data?.profile) {
        await store.set("token", data.token);
        dispatch(authActions.setToken(data.token));
        dispatch(profileActions.setProfile(data.profile))
      }
    };

    const authorization = async () => {
        const token = await store.get("token");

        if (!token) {
            dispatch(togglesActions.toggleCreatorAction({type: "isInitialized", value: true}));
            return
        }

        const data = await AuthorizationAsync(token);

        if (data) {
            dispatch(authActions.setAuthStatus("logged-in"));
            dispatch(profileActions.setProfile(data));
        }
        
        dispatch(togglesActions.toggleCreatorAction({type: "isInitialized", value: true}));
    }

    return {
      auth,
      authentication,
      authorization,
      register,
      logout,
    };
};
