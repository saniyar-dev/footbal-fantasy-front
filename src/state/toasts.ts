import { atom } from "recoil";
import { ToastTypes } from "@src/types";

const myToasts = atom<Array<ToastTypes>>({
  key: "myToasts",
  default: [{ _tag: "success", message: "وارد بازی شدی" }],
});

export default myToasts;
