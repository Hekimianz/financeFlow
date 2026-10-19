import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/User.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export default class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return await this.repo.findOne({
      where: { normalizedEmail: email },
    });
  }
}
