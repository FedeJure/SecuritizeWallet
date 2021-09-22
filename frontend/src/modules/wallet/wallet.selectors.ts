import { StoreState } from "../../store";
import { UserWallet } from "./UserWallet";

export const getUserWallets = (store: StoreState): UserWallet[] => {
  return store.wallet.wallets.map((w) => ({
    ...w,
    selected: w.address === store.wallet.selected,
    old: false //refactor this
  }));
};
