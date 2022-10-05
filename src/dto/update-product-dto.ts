import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmpty,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  isPaid: boolean;
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  seats: number;
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  status: string;
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  price: number;
}
