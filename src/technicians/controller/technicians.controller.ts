import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { TechniciansService } from '../technicians.service';
import { TechniciansDTO } from '../dto/technicials.dto';
import { AuthGuard } from '@nestjs/passport';
import { TechnicianI } from '../interfaces/technicians.interface';

@Controller('technicians')
export class TechniciansController {
  constructor(private techniciansService: TechniciansService) {}

  @Get()
  async getAllTechnical(): Promise<TechniciansDTO[]> {
    return this.techniciansService.findAll();
  }

  @Get('random')
  async randomTechnical() {
    return this.techniciansService.getRandomTechnicial();
  }

  @Post()
  async newTechnical(
    @Body() technicial: TechniciansDTO,
  ): Promise<TechniciansDTO> {
    return await this.techniciansService.newTechnicial(technicial);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('orders')
  async technicalOrder(@Request() req: any) {
    const technicial: TechnicianI = req.user;

    const techOrders = this.techniciansService.techOrders(
      technicial.technicalId,
    );

    return techOrders;
  }
}
