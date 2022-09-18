import { selectedSquadId } from "@src/state/players";
import { PLAYER } from "@src/types";
import { useRecoilState } from "recoil";
import { SERVER } from "./useAxios";
import useAppState from "./useAppState";

const useManagePlayer = (): {
  addPlayer: (player: PLAYER) => void;
  removePlayer: (squad_place: number, player_id: number) => void;
} => {
  const { getAppState } = useAppState();
  const [selectedId] = useRecoilState(selectedSquadId);

  const addPlayer = async (newPlayer: PLAYER) => {
    await SERVER.post("user/add-player", {
      playerId: newPlayer.player_id,
      squadPlace: selectedId.toString(),
    });

    getAppState();
  };

  const removePlayer = async (squad_place: number, player_id: number) => {
    await SERVER.post("user/remove-player", {
      squadPlace: squad_place.toString(),
      playerId: player_id,
    });

    getAppState();
  };

  return {
    addPlayer,
    removePlayer,
  };
};

export default useManagePlayer;
