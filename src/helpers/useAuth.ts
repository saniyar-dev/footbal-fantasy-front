import React from "react";
import HTTP from "./axios";

type AuthStateType = "in" | "out" | "Error";
type TokenType = string | false;

interface LoginDataType {
  username: string;
  password: string;
}

interface SignupDataType {
  username: string;
  password: string;
  country: string;
  email: string;
  name: string;
  lastname: string;
}

const useAuth = (): {
  CheckAuth: () => boolean;
  Login: (data: LoginDataType) => Promise<AuthStateType>;
  GetTokenFromLocal: () => TokenType;
  Signup: (data: SignupDataType) => AuthStateType;
} => {
  const GetTokenFromLocal = (): TokenType => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      return false;
    }
    return token;
  };

  const SetToken = (token: TokenType): void => {
    if (token) {
      window.localStorage.setItem("token", token);
    }
  };

  const CheckAuth = (): boolean => {
    const token = GetTokenFromLocal();
    if (token) {
      return true;
    }
    return false;
  };

  const Login = async (data: LoginDataType): Promise<AuthStateType> => {
    try {
      const token = GetTokenFromLocal();
      if (token) {
        return "in";
      }

      const response = await HTTP.post("user/login", data);
      SetToken(response.data.token);
      return "in";
    } catch (err) {
      console.log(err);
      return "Error";
    }
  };

  const Signup = (data: SignupDataType): AuthStateType => {
    try {
      // signup with server
      // HTTP.post("user/signup", data);
      const token = "";
      SetToken(token);
      return "in";
    } catch (err) {
      return "Error";
    }
  };

  return {
    Login,
    GetTokenFromLocal,
    Signup,
    CheckAuth,
  };
};

export default useAuth;
