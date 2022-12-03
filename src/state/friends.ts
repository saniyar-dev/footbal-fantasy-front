import { User } from "@src/types";
import { atom } from "recoil";

export const _followersList = atom<Array<User>>({
  key: "_followersList",
  default: [],
});

export const _followingsList = atom<Array<User>>({
  key: "_followingsList",
  default: [],
});
