import { Wallet } from "./Wallet";

export interface UserWallet extends Wallet {
    selected: boolean,
    old: boolean
}