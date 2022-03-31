import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CustomersService } from '../customers.service';
import { CustomerDTO } from '../dto/customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  async getAllCutomers(): Promise<CustomerDTO[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  async getCustomerById(@Param('id') customerId: string): Promise<CustomerDTO> {
    return await this.customersService.getCustomerById(customerId);
  }

  @Post()
  async newUser(@Body() customer: CustomerDTO): Promise<CustomerDTO> {
    return await this.customersService.newCust(customer);
  }

  // @Put(':id')
  // updateUser(@Param('id') id: string, @Body() user: CustomerDTO): CustomerDTO {
  //   // this.customers = this.customers.filter((user) => user.customerId !== id);
  //   // this.customers = [...this.customers, this.newUser(user)];
  //   // return user;
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  //   // this.customers = this.customers.filter((user) => user.customerId !== id);
  // }
}
