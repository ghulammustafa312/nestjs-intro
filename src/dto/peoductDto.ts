import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {


    @ApiProperty()
    name:string;

    @ApiProperty()
    isPaid: boolean;

    @ApiProperty()
    seats: number;

    @ApiProperty()
    status: string;

    @ApiProperty()
    price: number;
}
