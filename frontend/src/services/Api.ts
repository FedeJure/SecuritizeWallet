import { Wallet } from "../modules/wallet/Wallet";

const url = "http://localhost:3001";

const handleError = (response: Response): Response => {
  if (response.status > 400) throw Error(response.statusText);
  return response;
};

export const getTransactionsOfWallet = async (address: string) => {};

export const getSavedWallets = async (): Promise<Wallet[]> => {
  return fetch(`${url}/wallet/wallets`)
    .then(handleError)
    .then((response) => response.json());
};

export const updateWalletFavorite = async (
  address: string,
  favorite: boolean
): Promise<any> => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, favorite }),
  };
  return fetch(`${url}/wallet/update`, options)
    .then(handleError)
    .then((response) => response.json());
};

export const createWallet = async (address: string): Promise<any> => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address }),
  };
  return fetch(`${url}/wallet/create`, options)
    .then(handleError)
    .then((response) => response.json());
};
