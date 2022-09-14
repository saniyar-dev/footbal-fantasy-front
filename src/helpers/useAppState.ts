import { myPlayers } from "@src/state/players";
import myWallet from "@src/state/wallet";
import { USERPLAYER, RoleDict } from "@src/types";
import { useRecoilState } from "recoil";
import { SERVER } from "./axios";
import { selectedSquadId } from "@src/state/players";

const useAppState = (): {
  getAppState: () => void;
  players: Array<USERPLAYER>;
  wallet: number;
} => {
  const [players, setPlayers] = useRecoilState(myPlayers);
  const [wallet, setWallet] = useRecoilState(myWallet);
  const [, setSelectedId] = useRecoilState(selectedSquadId);

  const formatPositionId = (
    data: Array<Omit<USERPLAYER, "position"> & { position_id?: number }>
  ): Array<USERPLAYER> => {
    const newPlayerList = data.map((player): USERPLAYER => {
      const positionRole = RoleDict[player.position_id!];
      delete player.position_id;

      return {
        ...player,
        position: positionRole,
      };
    });
    return newPlayerList;
  };

  const formatPlayers = (data: Array<USERPLAYER>): Array<USERPLAYER> => {
    const newPlayerList = [...Array(15)]
      .map((_, index) => index + 1)
      .reduce((prev: Array<USERPLAYER>, curr: number): Array<USERPLAYER> => {
        const currentPlayer = data.find(
          (player) => player.squad_place === curr
        );

        if (currentPlayer) return [...prev, currentPlayer];
        return [
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
        ];
      }, [] as Array<USERPLAYER>);
    return newPlayerList;
  };

  const getPlayers = async (): Promise<Array<USERPLAYER>> => {
    try {
      const response = await SERVER.get("user/get-players");
      return formatPlayers(formatPositionId(response.data));
    } catch (err) {
      return [];
    }
  };

  const getWallet = async (): Promise<number> => {
    try {
      const response = await SERVER.get("user/get-wallet");
      return response.data.wallet as unknown as number;
    } catch (err) {
      return -1;
    }
  };

  const getAppState = async () => {
    const playersList = await getPlayers();
    setPlayers(playersList);

    const walletValue = await getWallet();
    setWallet(walletValue);

    setSelectedId(0);
  };

  return {
    getAppState,
    players,
    wallet,
  };
};

export default useAppState;
