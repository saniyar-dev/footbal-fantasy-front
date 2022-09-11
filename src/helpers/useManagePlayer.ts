import { selectedSquadId } from "@src/state/players";
import { USERPLAYER, PLAYER } from "@src/types";
import { useRecoilState } from "recoil";
import useAppState from "./useAppState";

const useManagePlayer = (): {
  addPlayer: (player: PLAYER) => void;
  removePlayer: (squad_place: number) => void;
} => {
  const { players, setAppState } = useAppState();
  const [selectedId] = useRecoilState(selectedSquadId);

  const addPlayer = (newPlayer: PLAYER) => {
    const newPlayerList = players.map((player): USERPLAYER => {
      if (player.squad_place === selectedId) {
        return {
          ...newPlayer,
          squad_place: selectedId,
        };
      }
      return player;
    });
    setAppState(newPlayerList);
  };

  const removePlayer = (squad_place: number) => {
    const newPlayerList = players.map((player): USERPLAYER => {
      if (player.squad_place === squad_place) {
        return {
          player_id: -1,
          first_name: "none",
          last_name: "none",
          web_name: "none",
          photo: "",
          position: player.position,
          price: 0,
          score: 0,
          team_id: 0,
          squad_place: player.squad_place,
        };
      }
      return player;
    });

    setAppState(newPlayerList);
  };

  return {
    addPlayer,
    removePlayer,
  };
};

export default useManagePlayer;
