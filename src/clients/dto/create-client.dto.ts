import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the client' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the client' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '+79528122222', description: 'The phone number of the client' })
  @IsEmail()
  readonly phone: string;
}