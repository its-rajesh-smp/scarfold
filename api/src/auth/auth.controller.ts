import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { LoginDto, SignUpDto } from './auth.dto.js';
import { AuthService } from './auth.service.js';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const auth = await this.authService.findByEmail(body.email);

    if (!auth) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await this.authService.checkPassword(
      body.password,
      auth.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const user = await this.authService.findByEmail(body.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const token = this.jwtService.sign({
      email: user.email,
      id: user.id,
    });

    const payload = {
      user,
      token,
    };

    return { message: 'Login successful', data: payload };
  }

  @Post('signup')
  async signup(@Body() body: SignUpDto) {
    const isUserExists = await this.authService.findByEmail(body.email);

    if (isUserExists) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await this.authService.hashPassword(body.password);
    const newUser = await this.authService.create(body.email, hashedPassword);

    const token = this.jwtService.sign({
      email: newUser.email,
      id: newUser.id,
    });

    const payload = {
      newUser,
      token,
    };

    return { message: 'Signup successful', data: payload };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Request() req: any) {
    const user = await this.authService.findByEmail(req.user.email);

    return { message: 'Here is your info', data: user };
  }
}
