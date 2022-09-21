import { PLAYER, RoleDict } from "@src/types";
import { useRef, useState } from "react";
import { SERVER } from "../helpers/useAxios";

const useChoosePlayer = (): {
  getAllPlayers: () => Promise<void>;
  playerList: Array<PLAYER>;
  getByLimit: (limitNumber?: number) => Promise<void>;
  nextPage: () => void;
  previousPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
  pager: { currentPage: number; totalPages: number; totalItems: number };
  filterPlayers: (filterId: number) => Promise<void>;
  searchPlayer: (str: string) => Promise<void>;
} => {
  const [playerList, setPlayerList] = useState<Array<PLAYER>>([]);
  const pager = useRef<{
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }>({
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
  });
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

  const formatPagerData = (data: {
    current_page: number;
    total_items: number;
    total_pages: number;
  }): void => {
    pager.current.currentPage = data.current_page;
    pager.current.totalItems = data.total_items;
    pager.current.totalPages = data.total_pages;
  };

  const getAllPlayers = async () => {
    try {
      const response = await SERVER.get("player/all");
      setPlayerList(formatPlayers(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  const getByLimit = async (limitNumber?: number) => {
    try {
      const response = await SERVER.get("player/search", {
        params: {
          limit: limitNumber ? limitNumber : 14,
          page: pager.current.currentPage,
          positionId: currentFilterId.current,
          search: currentSearchString.current,
        },
      });
      formatPagerData(response.data.pager);
      setPlayerList(formatPlayers(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = () => {
    if (pager.current.currentPage < pager.current.totalPages) {
      pager.current.currentPage++;
      getByLimit();
    }
  };

  const previousPage = () => {
    if (pager.current.currentPage > 1) {
      pager.current.currentPage--;
      getByLimit();
    }
  };

  const firstPage = () => {
    pager.current.currentPage = 1;
    getByLimit();
  };

  const lastPage = () => {
    pager.current.currentPage = pager.current.totalPages;
    getByLimit();
  };

  const filterPlayers = async (filterId: number) => {
    currentFilterId.current = filterId;
    pager.current.currentPage = 1;
    try {
      const response = await SERVER.get("player/search", {
        params: {
          limit: 14,
          page: pager.current.currentPage,
          positionId: currentFilterId.current,
          search: currentSearchString.current,
        },
      });
      formatPagerData(response.data.pager);
      setPlayerList(formatPlayers(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  const searchPlayer = async (str: string) => {
    currentSearchString.current = str;
    try {
      const response = await SERVER.get("player/search", {
        params: {
          limit: 14,
          page: pager.current.currentPage,
          positionId: currentFilterId.current,
          search: currentSearchString.current,
        },
      });

      formatPagerData(response.data.pager);
      setPlayerList(formatPlayers(response.data.data));
    } catch (err) {}
  };

  return {
    getAllPlayers,
    playerList,
    getByLimit,
    nextPage,
    previousPage,
    firstPage,
    lastPage,
    pager: pager.current,
    filterPlayers,
    searchPlayer,
  };
};

export default useChoosePlayer;
