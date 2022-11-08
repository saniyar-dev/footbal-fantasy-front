import useToast from "@src/helpers/useToast";
import { _selectedSquadId } from "@src/state/players";
import { PLAYER, USERPLAYER } from "@src/types";
import { useRecoilState } from "recoil";
import { SERVER } from "../helpers/useAxios";
import useAppState from "./useAppState";

const useManagePlayer = (): {
  addSquadPlayer: (player: PLAYER) => void;
  removeSquadPlayer: (squad_place: number, player_id: number) => void;
  substitutePlayer: (
    playerIn: USERPLAYER,
    playerOut: USERPLAYER
  ) => Promise<void>;
} => {
  const { addToast } = useToast();
  const { getAppState } = useAppState();
  const [selectedId] = useRecoilState(_selectedSquadId);

  const addSquadPlayer = async (newPlayer: PLAYER) => {
    try {
      await SERVER.post("squad", {
        playerId: newPlayer.player_id,
        squadPlace: selectedId,
      });

      getAppState();
    } catch (err) {
      getAppState();
      addToast({
        _tag: "error",
        message: "یه چیزی رفت رو هوا صفحه رو رفرش کن",
      });
      console.log(err);
    }
  };

  const removeSquadPlayer = async (squad_place: number, player_id: number) => {
    try {
      await SERVER.delete("squad", {
        data: {
          squadPlace: squad_place,
          playerId: player_id,
        },
      });

      getAppState();
    } catch (err) {
      getAppState();
      addToast({
        _tag: "error",
        message: "یه چیزی رفت رو هوا صفحه رو رفرش کن",
      });
      console.log(err);
    }
  };

  const substitutePlayer = async (
    playerIn: USERPLAYER,
    playerOut: USERPLAYER
  ) => {
    try {
      await SERVER.patch("squad/substituation", {
        playerInId: playerIn.player_id,
        playerOutId: playerOut.player_id,
      });

      getAppState();
    } catch (err) {
      getAppState();
      addToast({
        _tag: "error",
        message: "یه چیزی رفت رو هوا صفحه رو رفرش کن",
      });
      console.log(err);
    }
  };

  return {
    addSquadPlayer,
    removeSquadPlayer,
    substitutePlayer,
  };
};

export default useManagePlayer;
