import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export interface StoreState {
}
export const store = createStore(combineReducers({}), applyMiddleware(thunk));
