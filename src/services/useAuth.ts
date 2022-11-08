import { useNavigate } from "react-router-dom";
import { USER, SERVER } from "@src/helpers/useAxios";
import { FormInputTypes } from "@src/helpers/useFormValidator";
import { useRecoilState } from "recoil";
import { _userEmail } from "@src/state/global";
import useAppState from "./useAppState";
import { useCallback } from "react";
import useToast from "@src/helpers/useToast";

type TokenType = string | false;

const useAuth = (): {
  CheckAuth: () => boolean;
  Login: (data: Partial<Record<FormInputTypes, string>>) => void;
  GetTokenFromLocal: () => TokenType;
  Signup: (data: Partial<Record<FormInputTypes, string>>) => void;
  Signout: () => void;
  confirmSignup: (data: Partial<Record<FormInputTypes, string>>) => void;
} => {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useRecoilState(_userEmail);
  const { getAppState } = useAppState();

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
    setServerToken();
  };

  const removeToken = () => {
    window.localStorage.removeItem("token");
  };

  const setServerToken = () => {
    SERVER.interceptors.request.use((config) => {
      config.headers!.Authorization = `Bearer ${window.localStorage.getItem(
        "token"
      )}`;
      return config;
    });
    USER.interceptors.request.use((config) => {
      config.headers!.Authorization = `Bearer ${window.localStorage.getItem(
        "token"
      )}`;
      return config;
    });
  };

  const CheckAuth = (): boolean => {
    const token = getTokenFromLocal();
    if (token) {
      addToast({ _tag: "success", message: "وارد بازی شدی" });
      return true;
    }
    return false;
  };

  const Login = async (data: Partial<Record<FormInputTypes, string>>) => {
    try {
      const response = await USER.post("login", {
        userName: data.username,
        password: data.password,
      });
      setToken(response.data.token);

      navigate("/app/create-team");
      addToast({ _tag: "success", message: "وارد بازی شدی" });
      getAppState();
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
    }
  };

  const Signout = useCallback(async () => {
    try {
      removeToken();
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
    }
  }, []);

  const formatSignupData = (
    data: Partial<Record<FormInputTypes, string>>
  ): {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    country: string;
    password: string;
  } => {
    return {
      firstName: data.name!,
      lastName: data.lastname!,
      country: data.country!,
      email: data.email!,
      password: data.password!,
      userName: data.username!,
    };
  };

  const Signup = async (data: Partial<Record<FormInputTypes, string>>) => {
    try {
      console.log(data);
      await USER.post("signup", formatSignupData(data));

      navigate("/user/confirm");
      setUserEmail(data.email);
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
    }
  };

  const confirmSignup = async (
    data: Partial<Record<FormInputTypes, string>>
  ) => {
    try {
      await USER.post("verify", {
        ...data,
        email: userEmail,
      });

      navigate("/user/login");
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
    }
  };

  return {
    Login,
    GetTokenFromLocal: getTokenFromLocal,
    Signup,
    CheckAuth,
    confirmSignup,
    Signout,
  };
};

export default useAuth;
