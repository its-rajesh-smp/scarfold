import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      // Extracts the token as a Bearer token from the Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'hard!to-guess_secret',
    });
  }

  // Passport automatically decodes the token. If valid, it invokes validate()
  async validate(payload: any) {
    // Whatever is returned here is attached to request.user (e.g., req.user)
    return { id: payload.id, email: payload.email };
  }
}
