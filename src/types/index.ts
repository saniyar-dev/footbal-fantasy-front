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
