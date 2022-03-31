import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { encodePassword } from 'src/utils/bcrypt';
import { TechniciansDTO } from './dto/technicials.dto';
import { TechniciansEntity } from './entity/tecnical.entity';
import { OrdersService } from 'src/orders/orders.service';
import { OrdersEntity } from 'src/orders/entity/order.entity';

@Injectable()
export class TechniciansService {
  constructor(
    @InjectRepository(TechniciansEntity)
    private techniciansRepository: Repository<TechniciansEntity>,
    @InjectRepository(OrdersEntity)
    private ordersRepository: Repository<OrdersEntity>,
  ) {}

  async findAll(): Promise<TechniciansDTO[]> {
    return await this.techniciansRepository.find();
  }

  async newTechnicial(techniciansDTO: TechniciansDTO): Promise<TechniciansDTO> {
    const password = encodePassword(techniciansDTO.password);

    const newTechnicians: TechniciansEntity =
      await this.techniciansRepository.save({ ...techniciansDTO, password });
    return newTechnicians;
  }

  async getRandomTechnicial() {
    const technicial = await this.techniciansRepository
      .createQueryBuilder()
      .from(TechniciansEntity, 'technicians')
      .select('technicians.technicalId')
      .orderBy('RANDOM()')
      .limit(1)
      .getOne();

    return technicial;
  }

  async getTechnicalByEmail(email): Promise<TechniciansEntity> {
    const technical = await this.techniciansRepository.findOne({
      where: { email: email },
    });

    if (!technical) {
      throw new UnauthorizedException();
    }

    return technical;
  }

  async getById(technicalId): Promise<TechniciansEntity> {
    const technical = await this.techniciansRepository.findOne({
      where: { technicalId },
    });

    return technical;
  }

  async techOrders(technicialId): Promise<OrdersEntity[]> {
    // const orders = this.ordersService.techOrders(technicialId);
    const orders = this.ordersRepository.find({
      where: { technicialId: technicialId },
    });

    return orders;
  }
}
