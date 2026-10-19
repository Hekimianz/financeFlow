import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthController from './auth.controller.js';
import AuthService from './auth.service.js';
import AuthRepository from './auth.repository.js';
import User from '../User/entities/User.entity.js';
import { UsersModule } from '../User/users.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UsersModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
