import { Dispatch } from "redux";

export const setEuroRate = (rate: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_EURO_RATE",
      euroRate: rate,
    });
  };
};

export const setDollarRate = (rate: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_DOLLAR_RATE",
      dollarRate: rate,
    });
  };
};

export const loadRatesAction = () => {
  return (dispatch: Dispatch) => {
    // simulate consult to some exchanger api
    setEuroRate(2609.52)(dispatch);
    setDollarRate(3060.16)(dispatch);
  };
};
