import { ApiProperty } from '@nestjs/swagger';

export class TechniciansDTO {
  @ApiProperty()
  tehnicialId?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  identification: string;
}
