import { USERPLAYER } from "@src/types";
import { atom } from "recoil";

export const myPlayers = atom<Array<USERPLAYER>>({
  key: "myPlayers",
  default: [],
});

export const selectedSquadId = atom<number>({
  key: "selectedSquadId",
  default: 0,
});
