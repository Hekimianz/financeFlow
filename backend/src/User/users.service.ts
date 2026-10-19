import { Injectable } from '@nestjs/common';
import UsersRepository from './users.repository.js';
import User from './entities/User.entity.js';

@Injectable()
export default class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findByEmail(email);
  }
}
