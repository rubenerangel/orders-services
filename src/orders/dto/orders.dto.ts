import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  @ApiProperty()
  orderId?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  identification: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly attendDay: Date;

  @ApiProperty()
  readonly customerId: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly status: boolean;

  @ApiProperty()
  readonly cost: number;

  @ApiProperty()
  readonly technicialId: string;
}
