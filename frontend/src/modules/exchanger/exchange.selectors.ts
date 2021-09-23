import { StoreState } from "../../store";

export const getDollarRate = (store: StoreState) => {
  return store.exchanger.dollarRate
};

export const getEuroRate = (store: StoreState) => {
  return store.exchanger.euroRate
}