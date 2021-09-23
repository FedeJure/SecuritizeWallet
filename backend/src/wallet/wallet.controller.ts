import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDTO } from './dto/create-wallet.dto';
import { UpdateWalletDTO } from './dto/update-wallet.dto';
import { EtherscanService } from 'src/etherscan/etherscan.service';
import { Wallet } from './interfaces/wallet.interface';

@Controller('wallet')
export class WalletController {
  constructor(
    private walletService: WalletService,
    private etherscan: EtherscanService,
  ) {}

  // Retrieve wallets list
  @Get('wallets')
  async getAllWallet(@Res() res) {
    const wallets = await this.walletService.getAllWallet();
    return res.status(HttpStatus.OK).json(await this.addInfoToWallets(wallets));
  }

  // add a wallet
  @Post('/create')
  async addWallet(@Res() res, @Body() createWalletDTO: CreateWalletDTO) {
    try {
      const wallet = await this.walletService.addWallet(createWalletDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Wallet has been created successfully',
        wallet: await this.addInfoToWallet(wallet),
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating wallet',
        error,
      });
    }
  }

  // Update a wallet's details
  @Put('/update')
  async updateWallet(@Res() res, @Body() updateWalletDTO: UpdateWalletDTO) {
    const wallet = await this.walletService.updateWallet(updateWalletDTO);
    if (!wallet) throw new NotFoundException('Wallet does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Wallet has been successfully updated',
      wallet: await this.addInfoToWallet(wallet),
    });
  }

  // Delete a wallet
  @Delete('/delete')
  async deleteWallet(@Res() res, @Query('walletID') walletID) {
    const wallet = await this.walletService.deleteWallet(walletID);
    if (!wallet) throw new NotFoundException('Wallet does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Wallet has been deleted',
      wallet,
    });
  }

  async addInfoToWallet(wallet: Wallet) {
    return this.addInfoToWallets([wallet])[0];
  }

  async addInfoToWallets(wallets: Wallet[]) {
    const infos = await (await this.etherscan.getInfos(
      wallets.map(w => w.address),
    )).toPromise();

    return wallets.map((w, i) => ({
      address: w.address,
      favorite: w.favorite,
      balance: infos[i].balance,
      lastTransaction: infos[i].lastTransaction,
    }));
  }
}
