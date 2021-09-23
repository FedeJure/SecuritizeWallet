import { Wallet } from "./Wallet";
import { WalletState } from "./WalletState";

const initialState: WalletState = {
  wallets: [],
  selected: null,
};

export const wallet = (
  state: WalletState,
  action: { type: string } & any
): WalletState => {
  if (!state) return initialState;
  switch (action.type) {
    case "SET_WALLETS":
      return {
        ...state,
        wallets: getProcessedWallets(action.wallets, state.selected),
      };
    case "ADD_WALLET":
      return {
        ...state,
        wallets: [
          ...state.wallets,
          processWallet(action.wallet, state.selected),
        ],
      };
    case "SAVE_FAVORITE":
      return {
        ...state,
        wallets: state.wallets.map((w) =>
          w.address === action.address ? { ...w, favorite: action.value } : w
        ),
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.address,
      };
    default:
      return state;
  }
};

const getProcessedWallets = (
  wallets: Wallet[],
  selectedWallet: string | null
) => {
  return wallets.map((w) => processWallet(w, selectedWallet));
};

const processWallet = (wallet: Wallet, selectedWallet: string | null) => {
  const now = new Date();
  const oneYearAgoTime = now.setFullYear(now.getFullYear() - 1);
  return {
    ...wallet,
    selected: selectedWallet === wallet.address,
    old:
      wallet.firstTransaction !== null &&
      wallet.firstTransaction.timeStamp < oneYearAgoTime,
  };
};
