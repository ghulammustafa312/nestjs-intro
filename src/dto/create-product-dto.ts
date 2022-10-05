import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
export class ProductDTO {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsBoolean()
  isPaid: boolean;
  @ApiProperty()
  @IsNumber()
  seats: number;
  @ApiProperty()
  @IsString()
  status: string;
  @ApiProperty()
  @IsNumber()
  price: number;
}
