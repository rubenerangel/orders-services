import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from 'src/customers/customers.service';
import { CustomerEntity } from 'src/customers/entity/customers.entity';
import { TechniciansEntity } from 'src/technicians/entity/tecnical.entity';
import { TechniciansService } from 'src/technicians/technicians.service';
import { OredersController } from './controller/orders.controller';
import { OrdersEntity } from './entity/order.entity';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdersEntity]),
    TypeOrmModule.forFeature([CustomerEntity]),
    TypeOrmModule.forFeature([TechniciansEntity]),
  ],
  controllers: [OredersController],
  providers: [OrdersService, TechniciansService, CustomersService],
  exports: [OrdersService],
})
export class OrdersModule {}
