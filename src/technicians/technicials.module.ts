import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersService } from 'src/customers/customers.service';
import { CustomerEntity } from 'src/customers/entity/customers.entity';
import { OrdersEntity } from 'src/orders/entity/order.entity';
import { OrdersService } from 'src/orders/orders.service';
import { TechniciansController } from './controller/technicians.controller';
import { TechniciansEntity } from './entity/tecnical.entity';
import { TechniciansService } from './technicians.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TechniciansEntity]),
    TypeOrmModule.forFeature([CustomerEntity]),
    TypeOrmModule.forFeature([OrdersEntity]),
  ],
  controllers: [TechniciansController],
  providers: [TechniciansService, CustomersService, OrdersService],
  exports: [TechniciansService],
})
export class TechnicialsModule {}
