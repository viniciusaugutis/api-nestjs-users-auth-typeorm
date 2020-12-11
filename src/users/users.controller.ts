import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './models/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createAdminUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.createAdminUser(createUserDto);
  }
}
