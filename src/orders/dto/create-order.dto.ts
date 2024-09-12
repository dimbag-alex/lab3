import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 123, description: 'The ID of the client' })
  @IsNumber()
  readonly clientid: number;

  @ApiProperty({ example: 'Order description', description: 'The description of the order' })
  @IsString()
  readonly description: string;

  @ApiProperty({ example: 'Order date', description: 'dd.mm.yyyy' })
  @IsString()
  readonly date: string;

  @ApiProperty({ example: 123, description: 'The ID of the workshop' })
  @IsNumber()
  readonly workshopid: number;
}
