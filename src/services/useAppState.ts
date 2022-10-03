import {
  _squadPlayers,
  _mainPlayers,
  _selectedPlayer,
  _reservePlayers,
} from "@src/state/players";
import myWallet from "@src/state/wallet";
import { USERPLAYER, RoleDict } from "@src/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { SERVER } from "@src/helpers/useAxios";
import { _selectedSquadId } from "@src/state/players";

const useAppState = (): {
  getAppState: () => void;
  squadPlayers: Array<USERPLAYER>;
  mainPlayers: Array<USERPLAYER>;
  wallet: number;
  reservePlayers: Array<USERPLAYER>;
} => {
  const [squadPlayers, setSquadPlayers] = useRecoilState(_squadPlayers);
  const [mainPlayers, setMainPlayers] = useRecoilState(_mainPlayers);
  const [wallet, setWallet] = useRecoilState(myWallet);
  const reservePlayers = useRecoilValue(_reservePlayers);
  // const [reservePlayers, setReservePlayers] = useRecoilState(_reservePlayers);
  const [, setSelectedId] = useRecoilState(_selectedSquadId);
  const [, setSelectedPlayer] = useRecoilState(_selectedPlayer);

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

  const getSquadPlayers = async (): Promise<Array<USERPLAYER>> => {
    try {
      const response = await SERVER.get("squad");
      return formatPlayers(formatPositionId(response.data));
    } catch (err) {
      return [];
    }
  };

  const formatWallet = (value: number): number => {
    return value.toFixed(2) as unknown as number;
  };

  const getWallet = async (): Promise<number> => {
    try {
      const response = await SERVER.get("squad/get-wallet");
      return formatWallet(response.data.wallet.money as unknown as number);
    } catch (err) {
      return -1;
    }
  };

  const getMainPlayers = async (): Promise<Array<USERPLAYER>> => {
    try {
      const response = await SERVER.get("squad/main-squad");
      return formatPositionId(response.data);
    } catch (err) {
      return [];
    }
  };

  const getAppState = async () => {
    setSelectedId(0);
    setSelectedPlayer(undefined);

    setSquadPlayers(await getSquadPlayers());

    setWallet(await getWallet());

    const newMainPlayers = await getMainPlayers();
    setMainPlayers(newMainPlayers);
  };

  return {
    getAppState,
    squadPlayers,
    mainPlayers,
    reservePlayers,
    wallet,
  };
};

export default useAppState;
