import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './interfaces/wallet.interface';
import { CreateWalletDTO } from './dto/create-wallet.dto';


@Injectable()
export class WalletService {
    constructor(@InjectModel('Wallet') private readonly walletModel: Model<Wallet>) { }

    // fetch all wallets
    async getAllWallet(): Promise<Wallet[]> {
        const wallets = await this.walletModel.find().exec();
        return wallets;
    }

    // Get a single wallet
    async getWallet(walletID): Promise<Wallet> {
        const wallet = await this.walletModel.findById(walletID).exec();
        return wallet;
    }

    // post a single wallet
    async addWallet(createWalletDTO: CreateWalletDTO): Promise<Wallet> {
        const newWallet = await this.walletModel(createWalletDTO);
        return newWallet.save();
    }

    // Edit wallet details
    async updateWallet(walletID, createWalletDTO: CreateWalletDTO): Promise<Wallet> {
        const updatedWallet = await this.walletModel
            .findByIdAndUpdate(walletID, createWalletDTO, { new: true });
        return updatedWallet;
    }

    // Delete a wallet
    async deleteWallet(walletID): Promise<any> {
        const deletedWallet = await this.walletModel.findByIdAndRemove(walletID);
        return deletedWallet;
    }

}
