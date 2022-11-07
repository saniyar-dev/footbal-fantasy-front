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

export type ModalTypes =
  | {
      _tag: "player-delete";
      playerInfo: USERPLAYER;
    }
  | {
      _tag: "follow-user";
      userInfo: Object;
    }
  | {
      _tag: "change-player";
      playerIn: USERPLAYER;
      playerOut: USERPLAYER;
    };

export const RoleDict: Record<number, Role> = {
  1: "GK",
  2: "DEF",
  3: "MID",
  4: "ATT",
};

export const positionIdDict: Record<Role, number> = {
  GK: 1,
  DEF: 2,
  MID: 3,
  ATT: 4,
};

export type ToastTypes = {
  _tag: "error";
  message: string;
};

export type User = {
  userId: String;
  name: String;
  country: String;
  email: String;
  username: String;
  password: String;
  profilePic: unknown;
};
