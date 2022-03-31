import { ApiProperty } from '@nestjs/swagger';

export class CustomerDTO {
  @ApiProperty()
  customerId?: string;

  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly reference: string;

  @ApiProperty()
  readonly identification: string;
}
