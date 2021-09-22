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
      return { ...state, wallets: [...action.wallets] };
    case "ADD_WALLET":
      return { ...state, wallets: [...state.wallets, action.wallet] };
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        wallets: state.wallets.map((w) =>
          w.address === action.address ? { ...w, favorite: true } : w
        ),
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        wallets: state.wallets.map((w) =>
          w.address === action.address ? { ...w, favorite: false } : w
        ),
      };
    default:
      return state;
  }
};
