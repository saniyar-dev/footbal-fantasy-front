import myPlayers from "@src/state/players";
import myWallet from "@src/state/wallet";
import { PLAYER, USERPLAYER } from "@src/types";
import React from "react";
import { useRecoilState } from "recoil";
import HTTP from "./axios";

/* TODO: 
    setAppStateToDeafult: to backend;
    getAllPlayers: to backend;
    getWallet: to backend;
*/

const useAppState = (): {
  setAppStateToDefault: () => void;
  getAppState: () => void;
  players: Array<USERPLAYER>;
  wallet: number;
  setAppState: (playerList: Array<USERPLAYER>) => void;
} => {
  const [players, setPlayers] = useRecoilState(myPlayers);
  const [wallet, setWallet] = useRecoilState(myWallet);

  // const playerListModifier = (data) => {};

  const setAppStateToDefault = () => {
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
    setWallet(100);
  };

  const getPlayers = (): Array<USERPLAYER> => {
    try {
      // connect to server
      // const response = HTTP.get("user/players");

      const playersList = [] as Array<USERPLAYER>;
      return playersList;
    } catch (err) {
      return [];
    }
  };

  const getWallet = (): number => {
    try {
      // connect to server
      // const response = HTTP.get('user/wallet')

      return 100;
    } catch (err) {
      return -1;
    }
  };

  const getAppState = () => {
    const playersList = getPlayers();
    setPlayers(playersList);

    const walletValue = getWallet();
    setWallet(walletValue);
  };

  const setAppState = (playerList: Array<USERPLAYER>) => {
    try {
      // connect to server
      if (playerList) {
        setPlayers(playerList);
      }
      return;
    } catch (err) {
      return;
    }
  };

  return {
    setAppStateToDefault,
    getAppState,
    players,
    wallet,
    setAppState,
  };
};

export default useAppState;
