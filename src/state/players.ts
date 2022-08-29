import { atom } from "recoil";

interface PLAYER {
  id: number;
  name: string;
  score: number;
  price: number;
  club: string;
  role: "GK" | "DEF" | "MID" | "ATT";
}

const myPlayers = atom<Array<PLAYER>>({
  key: "myPlayers",
  default: [
    {
      id: 0,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "GK",
    },
    {
      id: 1,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "GK",
    },
    {
      id: 2,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "DEF",
    },
    {
      id: 3,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "DEF",
    },
    {
      id: 4,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "DEF",
    },
    {
      id: 5,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "DEF",
    },
    {
      id: 6,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "DEF",
    },
    {
      id: 7,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "MID",
    },
    {
      id: 8,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "MID",
    },
    {
      id: 9,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "MID",
    },
    {
      id: 10,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "MID",
    },
    {
      id: 11,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "MID",
    },
    {
      id: 12,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "ATT",
    },
    {
      id: 13,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "ATT",
    },
    {
      id: 14,
      name: "saniyar",
      score: 10,
      price: 10,
      club: "perspolis",
      role: "ATT",
    },
  ],
});

export default myPlayers;
