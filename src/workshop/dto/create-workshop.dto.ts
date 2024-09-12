import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export class createWorkshopDto {
    @ApiProperty({ example: '119049 г. Москва, ул. Донская, д. 8 стр. 1', description: 'The address of the workshop' })
    @IsString()
    readonly address: string
}