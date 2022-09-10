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
  player_id: number;
  first_name: string;
  last_name: string;
  web_name: string;
  photo: string;
  position: Role;
  team_id: number;
  score: number;
  price: number;
}

export interface USERPLAYER extends PLAYER {
  squad_place: number;
}

export type ModalTypes = {
  _tag: "player-delete";
  playerInfo: USERPLAYER;
};
