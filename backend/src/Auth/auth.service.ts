import { ConflictException, Injectable } from '@nestjs/common';
import AuthRepository from './auth.repository.js';
import RegisterUserDto from './dtos/register-user.dto.js';
import * as argon2 from 'argon2';
import UsersService from '../User/users.service.js';

@Injectable()
export default class AuthService {
  constructor(
    private readonly authRepo: AuthRepository,
    private readonly usersService: UsersService,
  ) {}

  async register(dto: RegisterUserDto): Promise<void> {
    const normalizedEmail = dto.email.toLowerCase().trim();
    const foundExistingEmail =
      await this.usersService.findByEmail(normalizedEmail);
    if (foundExistingEmail)
      throw new ConflictException('Email is already registered');
    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    await this.authRepo.register({
      name: dto.name,
      email: normalizedEmail,
      password: passwordHash,
    });
  }
}
