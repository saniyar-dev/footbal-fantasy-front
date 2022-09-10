export interface Styles {
  defaultWidth: number;
  defaultHeight: number;
  activeBgColor?: string;
  defaultBgColor?: string;
  border?: {
    radius: number;
    value: string;
  };
  font?: {
    fontSize: number;
    fontWeight: number;
  };
}

export type Role = "GK" | "DEF" | "MID" | "ATT";

export interface PLAYER {
  id: number;
  name: string;
  score: number;
  price: number;
  club: string;
  role: Role;
}

export type ModalTypes = {
  _tag: "player-delete";
  playerInfo: PLAYER;
};
