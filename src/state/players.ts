import { USERPLAYER } from "@src/types";
import { atom, selector } from "recoil";

export const _squadPlayers = atom<Array<USERPLAYER>>({
  key: "_squadPlayers",
  default: [],
});

export const _mainPlayers = atom<Array<USERPLAYER>>({
  key: "_mainPlayers",
  default: [],
});

export const _reservePlayers = selector<Array<USERPLAYER>>({
  key: "_reservePlayers",
  get: ({ get }) => {
    const newSquadPlayers = get(_squadPlayers);
    const newMainPlayers = get(_mainPlayers);
    return newSquadPlayers.filter(
      (squadPlayer) =>
        newMainPlayers.some(
          (mainPlayer) => squadPlayer.player_id === mainPlayer.player_id
        ) === false
    );
  },
});

export const _selectedSquadId = atom<number>({
  key: "_selectedSquadId",
  default: 0,
});

export const _selectedPlayer = atom<USERPLAYER | undefined>({
  key: "_selectedPlayer",
  default: undefined,
});
