import { Wallet } from "../modules/wallet/Wallet";

export const getTransactionsOfWallet = async (address: string) => {};

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
): Promise<any> => {

};

export const createWallet = async (
    address: string
  ): Promise<any> => {
  
  };
  