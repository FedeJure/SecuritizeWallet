import { Transaction } from "./Transaction";

export interface Wallet {
    address: string,
    favorite: boolean,
    selected: boolean,
    old: boolean,
    balance: number,
    firstTransaction: Transaction | null
}