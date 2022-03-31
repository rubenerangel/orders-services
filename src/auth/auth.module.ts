import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersEntity } from 'src/orders/entity/order.entity';
import { TechniciansEntity } from 'src/technicians/entity/tecnical.entity';
import { TechniciansService } from 'src/technicians/technicians.service';
import { AuthService } from './auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([TechniciansEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60d' },
    }),
    TypeOrmModule.forFeature([OrdersEntity]),
  ],
  providers: [AuthService, TechniciansService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
