import React from "react";

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
  // checkAuth: () => boolean;
  Login: (data: LoginDataType) => AuthStateType;
  getTokenFromLocal: () => TokenType;
  Signup: (data: SignupDataType) => AuthStateType;
} => {
  const getTokenFromLocal = (): TokenType => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      return false;
    }
    return token;
  };

  const setToken = (token: TokenType): void => {
    if (token) {
      window.localStorage.setItem("token", token);
    }
  };

  // const checkAuth = (): boolean => {
  //   // console.log("check auth");
  //   const token = getTokenFromLocal();
  //   if (token) {
  //     // login to server
  //   }
  //   return true;
  // };

  const Login = (data: LoginDataType): AuthStateType => {
    try {
      const token = getTokenFromLocal();
      if (token) {
        return "in";
      }
      return "out";
    } catch (err) {
      console.log(err);
      return "Error";
    }
  };

  const Signup = (data: SignupDataType): AuthStateType => {
    try {
      // signup with server
      const token = "";
      setToken(token);
      return "in";
    } catch (err) {
      return "Error";
    }
  };

  return {
    Login,
    getTokenFromLocal,
    Signup,
  };
};

export default useAuth;
