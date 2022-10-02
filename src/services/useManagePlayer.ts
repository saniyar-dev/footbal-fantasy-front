import { _selectedSquadId } from "@src/state/players";
import { PLAYER } from "@src/types";
import { useRecoilState } from "recoil";
import { SERVER } from "../helpers/useAxios";
import useAppState from "./useAppState";

const useManagePlayer = (): {
  addSquadPlayer: (player: PLAYER) => void;
  removeSquadPlayer: (squad_place: number, player_id: number) => void;
} => {
  const { getAppState } = useAppState();
  const [selectedId] = useRecoilState(_selectedSquadId);

  const addSquadPlayer = async (newPlayer: PLAYER) => {
    await SERVER.post("user/squad", {
      playerId: newPlayer.player_id,
      squadPlace: selectedId,
    });

    getAppState();
  };

  const removeSquadPlayer = async (squad_place: number, player_id: number) => {
    await SERVER.delete("user/squad", {
      data: {
        squadPlace: squad_place,
        playerId: player_id,
      },
    });

    getAppState();
  };

  return {
    addSquadPlayer,
    removeSquadPlayer,
  };
};

export default useManagePlayer;
