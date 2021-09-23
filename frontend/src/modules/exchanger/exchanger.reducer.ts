import { ExchangerState } from "./ExchangerState";

const initialState: ExchangerState = {
  euroRate: 1,
  dollarRate: 1,
};

export const exchanger = (
  state: ExchangerState,
  action: { type: string } & any
): ExchangerState => {
  if (!state) return initialState;
  switch (action.type) {
    case "SET_EURO_RATE":
      return { ...state, euroRate: action.euroRate };
    case "SET_DOLLAR_RATE":
      return { ...state, dollarRate: action.dollarRate };

    default:
      return state;
  }
};
