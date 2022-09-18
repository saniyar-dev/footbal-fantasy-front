import { serverPlayers } from "@src/state/players";
import { PLAYER, RoleDict } from "@src/types";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { SERVER } from "./useAxios";

const useChoosePlayer = (): {
  getAllPlayers: () => Promise<void>;
  playerList: Array<PLAYER>;
  getByLimit: (limitNumber?: number) => Promise<void>;
  nextPage: () => Promise<void>;
  previousPage: () => Promise<void>;
  currentPage: number;
  filterPlayers: (filterId: number) => Promise<void>;
  searchPlayer: (str: string) => Promise<void>;
} => {
  const [playerList, setPlayerList] = useRecoilState(serverPlayers);
  const currentPage = useRef<number>(1);
  const currentFilterId = useRef<number>(0);
  const currentSearchString = useRef<string>("");

  const formatPlayers = (
    data: Array<Omit<PLAYER, "position"> & { position_id?: number }>
  ): Array<PLAYER> => {
    const newPlayerList = data.map((player): PLAYER => {
      const positionRole = RoleDict[player.position_id!];
      delete player.position_id;

      return {
        ...player,
        position: positionRole,
      };
    });
    return newPlayerList;
  };

  const getAllPlayers = async () => {
    try {
      const response = await SERVER.get("player/all");
      setPlayerList(formatPlayers(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const getByLimit = async (limitNumber?: number) => {
    try {
      const response = await SERVER.get("player/search", {
        params: {
          limit: limitNumber ? limitNumber : 14,
          page: currentPage.current,
          positionId: currentFilterId.current,
          search: currentSearchString.current,
        },
      });
      setPlayerList(formatPlayers(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = async () => {
    if (currentPage.current < 17) {
      currentPage.current++;
      getByLimit();
    }
  };

  const previousPage = async () => {
    if (currentPage.current > 1) {
      currentPage.current--;
      getByLimit();
    }
  };

  const filterPlayers = async (filterId: number) => {
    currentFilterId.current = filterId;
    currentPage.current = 1;
    try {
      const response = await SERVER.get("player/search", {
        params: {
          limit: 14,
          page: currentPage.current,
          positionId: currentFilterId.current,
          search: currentSearchString.current,
        },
      });
      setPlayerList(formatPlayers(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const searchPlayer = async (str: string) => {
    currentSearchString.current = str;
    console.log(currentSearchString.current);
    try {
      const response = await SERVER.get("player/search", {
        params: {
          limit: 14,
          page: currentPage.current,
          positionId: currentFilterId.current,
          search: currentSearchString.current,
        },
      });

      setPlayerList(formatPlayers(response.data));
    } catch (err) {}
  };

  return {
    getAllPlayers,
    playerList,
    getByLimit,
    nextPage,
    previousPage,
    currentPage: currentPage.current,
    filterPlayers,
    searchPlayer,
  };
};

export default useChoosePlayer;
