import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDTO } from '../dto/orders.dto';
import { OrdersService } from '../orders.service';

@Controller('orders')
export class OredersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  async newOrder(@Body() orderDTO: OrderDTO): Promise<OrderDTO> {
    return await this.ordersService.newOrder(orderDTO);
  }

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }
}
