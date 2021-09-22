import { HttpModule, Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/wallet.schema';
import { EtherscanService } from 'src/etherscan/etherscan.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Wallet', schema: CustomerSchema }])
  ],
  controllers: [WalletController],
  providers: [WalletService, EtherscanService]
})
export class WalletModule { }
