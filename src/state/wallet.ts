import { atom } from "recoil";

const myWallet = atom<number>({
  key: "myWallet",
  default: 100,
});

export default myWallet;
