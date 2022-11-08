import { atom } from "recoil";
import { ToastTypes } from "@src/types";

const myToasts = atom<Array<ToastTypes>>({
  key: "myToasts",
  default: [{ _tag: "error", message: "خطایی رخ داده است" }],
});

export default myToasts;
