import { Dispatch } from "redux";
import { createWallet, getSavedWallets, updateWalletFavorite } from "../../services/Api";

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

export const saveWallet = (address: string) => {
  return (dispatch: Dispatch) => {
    createWallet(address).then(() => {
      dispatch({
        type: "ADD_WALLET",
        wallet: {
          address,
          favorite: false
        },
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