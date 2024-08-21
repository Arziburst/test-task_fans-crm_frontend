
import {Profile} from '../profile/types'

export type AuthStatus = "logged-in" | "logged-out";

export type AuthState = {
  authStatus: AuthStatus;
  token: string | null;
};

// Api 
export type AuthenticationInput = {
  username: string;
  password: string
}

export type AuthorizationAsyncContract = (token: string) => Promise<Profile | null>; 

type AuthenticationResponse = {
  token: AuthState["token"];
  profile: Profile;
};

export type AuthenticationAsyncContract = (
  body: AuthenticationInput
) => Promise<AuthenticationResponse| null>; 


export type RegisterInput = {
  username: string;
  password: string;
  email: string;
};

export type RegisterAsyncContract = (
  body: RegisterInput
) => Promise<AuthenticationResponse | null>; 

