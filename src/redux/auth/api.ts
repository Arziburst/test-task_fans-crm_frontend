import {API_URL} from '../../init/constants'
import {
  AuthenticationAsyncContract,
  AuthorizationAsyncContract,
  RegisterAsyncContract,
} from "./types";

export const AuthenticationAsync: AuthenticationAsyncContract = async (input) => {
  try {
    const response = await fetch(`${API_URL}/auth/sign-in`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    
    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
};

export const AuthorizationAsync: AuthorizationAsyncContract = async (token) => {
  try {
    const response = await fetch(`${API_URL}/auth/authorization`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
};

export const RegisterAsync: RegisterAsyncContract = async (input) => {
  try {
    const response = await fetch(`${API_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
};