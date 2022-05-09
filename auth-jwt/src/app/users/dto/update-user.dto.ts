import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
    @AutoMap()
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @AutoMap()
    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @AutoMap()
    @ApiProperty()
    @IsNotEmpty()
    email: string;
}