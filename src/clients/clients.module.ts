import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client } from './clients.entity';
import { Order } from 'src/orders/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Order])],
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}