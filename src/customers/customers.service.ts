import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDTO } from './dto/customers.dto';
import { CustomerEntity } from './entity/customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll(): Promise<CustomerDTO[]> {
    return await this.customerRepository.find();
  }

  async newCust(customerDTO: CustomerDTO): Promise<CustomerDTO> {
    const newCustomer: CustomerEntity = await this.customerRepository.save(
      customerDTO,
    );

    return newCustomer;
  }

  async getCustomerById(id): Promise<CustomerDTO> {
    return await this.customerRepository.findOne({ where: { customerId: id } });
  }

  // async updateCustomer(customerId, customerDTO: CustomerDTO): Promise<CustomerEntity> {
  //   const customerEntity = await this.customerRepository.findOne({
  //     where: { customerId: customerId },
  //   });
  //   const newCustomer
  //   return await this.customerRepository.upsert(id, customerDTO);
  // }
}
