import useToast from "@src/helpers/useToast";
import { _selectedSquadId } from "@src/state/players";
import { PLAYER, RoleDict } from "@src/types";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
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
  filterId: number;
} => {
  const { addToast } = useToast();
  const [selectedSquadId] = useRecoilState(_selectedSquadId);
  const [filterId, setFilterId] = useState<number>(0);
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
  const currentSortOrder = useRef<{ sortBy: "price"; order: "ASC" | "DES" }>();

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
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
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
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
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

  useEffect(() => {
    if (selectedSquadId === 0) {
      setFilterId(0);
      filterPlayers(0);
    } else if (selectedSquadId < 3) {
      setFilterId(1);
      filterPlayers(1);
    } else if (selectedSquadId < 8) {
      setFilterId(2);
      filterPlayers(2);
    } else if (selectedSquadId < 13) {
      setFilterId(3);
      filterPlayers(3);
    } else {
      setFilterId(4);
      filterPlayers(4);
    }
  }, [selectedSquadId]);

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
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
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
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
    }
  };

  const sortPlayers = async () => {};

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
    filterId,
  };
};

export default useChoosePlayer;
