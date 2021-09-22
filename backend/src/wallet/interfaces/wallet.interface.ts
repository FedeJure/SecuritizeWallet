import { Document } from 'mongoose';

export interface Wallet extends Document {
    readonly address: string;
    readonly favorite: boolean;
    readonly created_at: Date;
}