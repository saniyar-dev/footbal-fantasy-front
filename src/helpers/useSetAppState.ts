import myPlayers from "@src/state/players";
import myWallet from "@src/state/wallet";
import { PLAYER, USERPLAYER } from "@src/types";
import React from "react";
import { useRecoilState } from "recoil";
import HTTP from "./axios";

const useSetAppState = (): {
  setAllPlayers: () => void;
  setAppState: () => void;
  setPlayerWallet: () => void;
} => {
  const [players, setPlayers] = useRecoilState(myPlayers);
  const [wallet, setWallet] = useRecoilState(myWallet);

  // const playerListModifier = (data) => {};

  const setAllPlayers = async () => {
    // const response = await HTTP.get("user/get-players");
    // setPlayers(response.data as Array<PLAYER>);

    const userPlayerList = [...Array(15)]
      .map((_, index) => index + 1)
      .reduce(
        (prev: Array<USERPLAYER>, curr: number): Array<USERPLAYER> => [
          ...prev,
          {
            player_id: -1,
            first_name: "none",
            last_name: "none",
            web_name: "none",
            photo: "",
            position:
              curr <= 2 ? "GK" : curr <= 7 ? "DEF" : curr <= 12 ? "MID" : "ATT",
            price: 0,
            score: 0,
            team_id: 0,
            squad_place: curr,
          },
        ],
        [] as Array<USERPLAYER>
      );
    setPlayers(userPlayerList);
  };

  const setPlayerWallet = async () => {
    setWallet(100);
  };

  const setAppState = () => {
    setAllPlayers();
    setPlayerWallet();
  };

  return {
    setAllPlayers,
    setAppState,
    setPlayerWallet,
  };
};

export default useSetAppState;
