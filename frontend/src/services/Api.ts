import { Wallet } from "../modules/wallet/Wallet";

const etherscanApi = "https://api.etherscan.io/api";
const etherscanApiKey = "NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY";

export const getTransactionsOfWallet = async (address: string) => {};

//Move this to backend
export const getBalances = async (addresses: string[]) => {
  return fetch(
    `${etherscanApi}` +
      "?module=account" +
      "&action=balancemulti" +
      `&address=${addresses.join(",")}` +
      "&tag=latest" +
      `&apikey=${etherscanApiKey}`
  ).then((response) => response.json());
};

//Move this to backend
export const getTransactions = async (address: string) => {
  return fetch(
    `${etherscanApi}` +
      "?module=account" +
      "&action=txlist" +
      `&address=${address}` +
      `&startblock=0` +
      `&endblock=99999999` +
      `&page=1` +
      `&offset=10` +
      `&sort=asc` +
      `&apikey=${etherscanApiKey}`
  ).then((response) => response.json());
};

export const getSavedWallets = async (): Promise<Wallet[]> => {
  return [
    {
      address: "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
      favorite: false,
    },
    {
      address: "0x73bceb1cd57c711feac4224d062b0f6ff338501e",
      favorite: true,
    },
    {
      address: "0x9bf4001d307dfd62b26a2f1307ee0c0307632d59",
      favorite: false,
    },
  ];
};

export const updateWalletFavorite = async (
  address: string,
  value: boolean
): Promise<any> => {};

export const createWallet = async (address: string): Promise<any> => {
  const balances = await getBalances([address])
  console.log(balances)
};
