import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { WalletState } from "./modules/wallet/WalletState";
import { wallet } from "./modules/wallet/wallet.reducer";

export interface StoreState {
  wallet: WalletState;
}

export const store = createStore(
  combineReducers({ wallet }),
  applyMiddleware(thunk)
);
