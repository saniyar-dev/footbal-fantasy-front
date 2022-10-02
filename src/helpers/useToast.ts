import myToasts from "@src/state/toasts";
import { ToastTypes } from "@src/types";
import { useRecoilState } from "recoil";

const useToast = (): {
  toasts: Array<ToastTypes>;
  addToast: (toast: ToastTypes) => void;
  getLastToast: () => ToastTypes | undefined;
  removeLastToast: () => void;
} => {
  const [toasts, setToasts] = useRecoilState(myToasts);

  const addToast = (toast: ToastTypes) => {
    setToasts([...toasts, toast]);
  };

  const removeLastToast = () => {
    setToasts(toasts.slice(1));
  };

  const getLastToast = (): ToastTypes | undefined => {
    if (toasts.length === 0) return undefined;

    const res = toasts[0];
    removeLastToast();

    return res;
  };

  return {
    toasts,
    addToast,
    removeLastToast,
    getLastToast,
  };
};

export default useToast;
