import { StoreState } from "../../store";
import { Wallet } from "./Wallet";

export const getUserWallets = (store: StoreState): Wallet[] => {
  return store.wallet.wallets.map(w => ({...w, selected: w.address === store.wallet.selected}));
};

export const getLoading = (store: StoreState): boolean => {
  return store.wallet.loading
}

export const getSelectedWallet = (store: StoreState): Wallet | undefined => {
  return store.wallet.wallets.find(w => w.address === store.wallet.selected)
}