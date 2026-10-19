import { Controller } from '@nestjs/common';
import UsersService from './users.service.js';

@Controller('/users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
