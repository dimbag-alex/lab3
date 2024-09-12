import { Module } from '@nestjs/common';
import { WorkshopService } from './workshop.service';
import { WorkshopController } from './workshop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/orders.entity';
import { Workshop } from './workshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop, Order])],
  providers: [WorkshopService],
  controllers: [WorkshopController]
})
export class WorkshopModule {}
