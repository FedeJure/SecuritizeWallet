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

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  // Retrieve wallets list
  @Get('wallets')
  async getAllWallet(@Res() res) {
    const wallets = await this.walletService.getAllWallet();
    return res.status(HttpStatus.OK).json(wallets);
  }

  // add a wallet
  @Post('/create')
  async addWallet(@Res() res, @Body() createWalletDTO: CreateWalletDTO) {
    try {
      const wallet = await this.walletService.addWallet(createWalletDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Wallet has been created successfully',
        wallet,
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
  async updateWallet(
    @Res() res,
    @Query('walletID') walletID,
    @Body() createWalletDTO: CreateWalletDTO,
  ) {
    const wallet = await this.walletService.updateWallet(
      walletID,
      createWalletDTO,
    );
    if (!wallet) throw new NotFoundException('Wallet does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Wallet has been successfully updated',
      wallet,
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
}
