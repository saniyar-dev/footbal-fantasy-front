import myPlayers from "@src/state/players";
import myWallet from "@src/state/wallet";
import { PLAYER } from "@src/types";
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

    setPlayers([]);
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
