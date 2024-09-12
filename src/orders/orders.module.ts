// src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './orders.entity';
import { Client } from 'src/clients/clients.entity';
import { Workshop } from 'src/workshop/workshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Client, Workshop])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
