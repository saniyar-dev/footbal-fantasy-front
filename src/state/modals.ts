import { atom } from "recoil";
import { ModalTypes } from "@src/types";

export const myModals = atom<Array<ModalTypes>>({
  key: "myModals",
  default: [],
});
