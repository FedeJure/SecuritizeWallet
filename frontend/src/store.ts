import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { WalletState } from "./modules/wallet/WalletState";
import { wallet } from "./modules/wallet/wallet.reducer";
import { exchanger } from "./modules/exchanger/exchanger.reducer";
import { ExchangerState } from "./modules/exchanger/ExchangerState";

export interface StoreState {
  wallet: WalletState;
  exchanger: ExchangerState;
}

export const store = createStore(
  combineReducers({ wallet, exchanger }),
  applyMiddleware(thunk)
);
