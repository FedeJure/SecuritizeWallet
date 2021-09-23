import { StoreState } from "../../store";
import { Wallet } from "./Wallet";

export const getUserWallets = (store: StoreState): Wallet[] => {
  return store.wallet.wallets;
};
