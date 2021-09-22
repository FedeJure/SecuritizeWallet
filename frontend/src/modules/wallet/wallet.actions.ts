import { Dispatch } from "redux";
import { getSavedWallets, updateWalletFavorite } from "../../services/Api";

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

export const setFavorite = (address: string, value: boolean) => {
  return (dispatch: Dispatch) => {
    updateWalletFavorite(address, value).then(() => {
      dispatch({
        type: "SAVE_FAVORITE",
        address,
        value,
      });
    });
  };
};


export const setSelected = (address: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_SELECTED",
      address,
    });
  };
}