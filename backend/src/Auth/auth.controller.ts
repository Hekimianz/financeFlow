import { Body, Controller, Post } from '@nestjs/common';
import AuthService from './auth.service.js';
import RegisterUserDto from './dtos/register-user.dto.js';

@Controller('/auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  async register(@Body() dto: RegisterUserDto): Promise<string> {
    await this.authService.register(dto);
    return 'User registered';
  }
}
