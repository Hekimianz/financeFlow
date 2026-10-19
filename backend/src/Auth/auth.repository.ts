import { Injectable } from '@nestjs/common';

import User from '../User/entities/User.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class AuthRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  async register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> {
    const newUser = this.usersRepo.create({
      name,
      normalizedEmail: email,
      passwordHash: password,
    });
    await this.usersRepo.save(newUser);
  }
}
