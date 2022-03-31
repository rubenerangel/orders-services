import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerEntity } from 'src/customers/entity/customers.entity';
import { TechniciansService } from 'src/technicians/technicians.service';
import { OrderDTO } from './dto/orders.dto';
import { OrdersEntity } from './entity/order.entity';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private ordersRepository: Repository<OrdersEntity>,
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
    private customersService: CustomersService,
    private techniciansService: TechniciansService,
  ) {}

  async newOrder(orderDTO: OrderDTO): Promise<any> {
    // Buscamos el tecnico de manera Random
    const randomTechnical = await this.techniciansService.getRandomTechnicial();
    if (!randomTechnical) return { message: 'No se han agregado Técnicos' };

    // Se guarda el cliente
    const newCustomer = await this.customersService.newCust(orderDTO);

    // Luego se guardan los demás datos de la orden
    const newOrder = new OrdersEntity();
    newOrder.attendDay = orderDTO.attendDay;
    newOrder.createdAt = orderDTO.createdAt;
    newOrder.customerId = orderDTO.customerId;
    newOrder.description = orderDTO.description;
    newOrder.cost = orderDTO.cost;
    newOrder.customerId = newCustomer.customerId;
    newOrder.status = false;
    newOrder.technicialId = randomTechnical.technicalId;

    await this.ordersRepository.save(newOrder);

    return {
      message: `Todo ien`,
    };
  }

  async findAll(): Promise<OrdersEntity[]> {
    return await this.ordersRepository.find();
  }

  async techOrders(technicialId: string) {
    return await this.ordersRepository.find({
      where: { technicialId: technicialId },
    });
  }
}
