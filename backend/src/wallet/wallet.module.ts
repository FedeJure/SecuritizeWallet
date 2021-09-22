import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/wallet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Wallet', schema: CustomerSchema }])
  ],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule { }
