import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    @AutoMap()
    name: string;
    @AutoMap()
    @ApiProperty()
    description: string;
    @AutoMap()
    @ApiProperty()
    category: string;
    @AutoMap()
    @ApiProperty()
    manufacturer: string;
    @AutoMap()
    @ApiProperty()
    imageUrl: string;
    @AutoMap()
    @ApiProperty()
    price: number;

}
