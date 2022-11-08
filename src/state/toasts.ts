import { atom } from "recoil";
import { ToastTypes } from "@src/types";

const myToasts = atom<Array<ToastTypes>>({
  key: "myToasts",
  default: [],
});

export default myToasts;
