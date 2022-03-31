import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { TechniciansDTO } from 'src/technicians/dto/technicials.dto';
import { TechniciansService } from 'src/technicians/technicians.service';
import { JWTPayload } from '../jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private techniciansService: TechniciansService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JWTPayload): Promise<TechniciansDTO> {
    const technical = await this.techniciansService.getById(
      payload.technicalId,
    );
    if (!technical) {
      throw new UnauthorizedException();
    }
    return technical;
  }
}
