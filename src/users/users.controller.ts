import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { RoleGuard } from '../auth/guard/role.guard';
import { Constants } from 'utils/constants';



@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signUp')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiSecurity('JWT-auth')
  @Get()
  @UseGuards( new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  findAll() {
    return this.usersService.findAll();
  }

  @Get('email/:email')
  findUserByEmail(@Param('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiSecurity('JWT-auth')
  @Delete(':id')
  @UseGuards( new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
