import { USERPLAYER } from "@src/types";
import { atom } from "recoil";

export const _squadPlayers = atom<Array<USERPLAYER>>({
  key: "_squadPlayers",
  default: [],
});

export const _mainPlayers = atom<Array<USERPLAYER>>({
  key: "_mainPlayers",
  default: [],
});

export const _reservePlayers = atom<Array<USERPLAYER>>({
  key: "_reservePlayers",
  default: [],
});

export const selectedSquadId = atom<number>({
  key: "selectedSquadId",
  default: 0,
});
