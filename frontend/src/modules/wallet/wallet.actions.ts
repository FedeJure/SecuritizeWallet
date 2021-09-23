import { Dispatch } from "redux";
import {
  createWallet,
  getSavedWallets,
  updateWalletFavorite,
} from "../../services/Api";

export const loadWallets = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    getSavedWallets()
      .then((wallets) => {
        dispatch({
          type: "SET_WALLETS",
          wallets,
        });
      })
      .catch((error) => alert(error))
      .finally(() => {
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      });
  };
};

export const saveWallet = (address: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    createWallet(address)
      .then(({ wallet }) => {
        dispatch({
          type: "ADD_WALLET",
          wallet,
        });
      })
      .catch((error) => alert(error))
      .finally(() => {
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      });
  };
};

export const setFavorite = (address: string, value: boolean) => {
  return (dispatch: Dispatch) => {
    updateWalletFavorite(address, value)
      .then(() => {
        dispatch({
          type: "SAVE_FAVORITE",
          address,
          value,
        });
      })
      .catch((error) => alert(error));
  };
};

export const setSelected = (address: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_SELECTED",
      address,
    });
  };
};
