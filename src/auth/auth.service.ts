import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TechniciansService } from 'src/technicians/technicians.service';
import { JWTPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private techniciansService: TechniciansService,
    private jwtService: JwtService,
  ) {}

  async validateTechnical(email: string, pass: string): Promise<boolean> {
    const technical = await this.techniciansService.getTechnicalByEmail(email);

    return await technical.validatePassword(pass);
  }

  async generateAccessToken(email: string) {
    const technical = await this.techniciansService.getTechnicalByEmail(email);
    const payload: JWTPayload = { technicalId: technical.technicalId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
