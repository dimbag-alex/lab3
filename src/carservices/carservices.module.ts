import { Module } from '@nestjs/common';
import { CarservicesService } from './carservices.service';

@Module({
  providers: [CarservicesService]
})
export class CarservicesModule {}
