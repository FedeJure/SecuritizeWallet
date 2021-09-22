import { Wallet } from "./Wallet";

export interface WalletState {
    wallets: Wallet[],
    selected: string | null
}