import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto, SignUpDto } from './auth.dto.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    console.log(body);
    const auth = await this.authService.create(body.email, body.password);
    return { message: 'Login successful', data: auth };
  }

  @Post('signup')
  async signup(@Body() body: SignUpDto) {
    console.log(body);
    return { message: 'Signup successful' };
  }

  @Get('me')
  async me() {
    return { message: 'Here is your info' };
  }
}
