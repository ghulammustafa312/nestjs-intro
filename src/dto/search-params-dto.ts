import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class SearchParams {
  @ApiProperty()
  @Matches(/^(\w*(\d+[a-zA-Z]|[a-zA-Z]+\d)\w*)+$/, {
    message: 'id must be alphanumeric',
  })
  @IsNotEmpty()
  id: string;
}
