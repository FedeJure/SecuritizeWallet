import { StoreState } from "../../store";
import { Wallet } from "./Wallet";

export const getUserWallets = (store: StoreState): Wallet[] => {
  return store.wallet.wallets.map(w => ({...w, selected: store.wallet.selected === w.address}))
};
