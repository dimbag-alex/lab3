import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';
import { Order } from 'src/orders/orders.entity';

export class UpdateClientDto {

    @ApiProperty({ example: 'John Doe', description: 'The name of the client' })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the client' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: '+79528122222', description: 'The phone number of the client' })
    @IsEmail()
    readonly phone: string;

    @ApiProperty({ example: 'Order description', description: 'The new order of the client' })
    @IsString()
    readonly orders: Order[]

}