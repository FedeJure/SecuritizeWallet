import { HttpService, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './interfaces/wallet.interface';
import { CreateWalletDTO } from './dto/create-wallet.dto';
import { EtherscanService } from 'src/etherscan/etherscan.service';
import { UpdateWalletDTO } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    private etherscan: EtherscanService,
  ) {}

  async getAllWallet(): Promise<Wallet[]> {
    const wallets = await this.walletModel.find().exec();
    return wallets;
  }

  async getWallet(walletID): Promise<Wallet> {
    const wallet = await this.walletModel.findById(walletID).exec();
    return wallet;
  }

  async addWallet(createWalletDTO: CreateWalletDTO): Promise<Wallet> {
    const response = await (await this.etherscan.getBalances([
      createWalletDTO.address,
    ])).toPromise();
    if (response.status == 0) throw Error('Invalid address');
    const newWallet = await this.walletModel(createWalletDTO);
    return newWallet.save();
  }

  async updateWallet(updateWalletDTO: UpdateWalletDTO): Promise<Wallet> {
    const updatedWallet = await this.walletModel.findOneAndUpdate(
      {
        address: updateWalletDTO.address,
      },
      {
        favorite: updateWalletDTO.favorite,
      },
    );
    return updatedWallet;
  }

  async deleteWallet(walletID): Promise<any> {
    const deletedWallet = await this.walletModel.findByIdAndRemove(walletID);
    return deletedWallet;
  }
}
