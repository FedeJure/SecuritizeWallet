import { Dispatch } from "redux";
import { getSavedWallets } from "../../services/Api";

export const loadWallets = () => {
  return (dispatch: Dispatch) => {
    getSavedWallets().then((wallets) => {
      dispatch({
        type: "SET_WALLETS",
        wallets,
      });
    });
  };
};
