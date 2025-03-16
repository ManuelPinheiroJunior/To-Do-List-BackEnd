import { Injectable, Logger, ConflictException } from '@nestjs/common';


import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './repo/users.repository';
import { User } from './entities/user.entity';

import { UpdateUserDto } from './dto/update-user.dto';
import { Constants } from 'utils/constants';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      this.logger.log('Creating a new user...');

      const existingUser = await this.usersRepository.findOne({ where: { email: createUserDto.email } });
      if (existingUser) {
        throw new ConflictException('Email is already registered');
      }

    
      let user: User = new User();
      user.email = createUserDto.email;
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      user.dateOfBirth = createUserDto.dateOfBirth;
      user.role = Constants.ROLES.NORMAL_ROLE;

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(createUserDto.password, salt);

      const savedUser = await this.usersRepository.save(user);
      this.logger.log(`User created: ${savedUser.id}`);
      return savedUser;
    } catch (error) {
      this.logger.error('Error creating user', error.stack);
      throw error;
    }
  }

  async findAll() {
    try {
      this.logger.log('Fetching all users...');
      return await this.usersRepository.find();
    } catch (error) {
      this.logger.error('Error fetching users', error.stack);
      throw error;
    }
  }

  findUserByEmail(email: string) {
    try {
      this.logger.log(`Fetching user with email: ${email}`);
      return this.usersRepository.findOne({ where: { email: email } });
    } catch (error) {
      this.logger.error(`Error fetching user with email: ${email}`, error.stack);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      this.logger.log(`Fetching user with ID: ${id}`);
      return await this.usersRepository.findOne({ where: { id } });
    } catch (error) {
      this.logger.error(`Error fetching user with ID: ${id}`, error.stack);
      throw error;
    }
  }

  async findUserById(id: number) {
    try {
      this.logger.log(`Fetching user with ID: ${id}`);
      return await this.usersRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      this.logger.error(`Error fetching user with ID: ${id}`, error.stack);
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      this.logger.log(`Updating user with ID: ${id}`);
      await this.usersRepository.update(id, updateUserDto);
      return this.findOne(id);
    } catch (error) {
      this.logger.error(`Error updating user with ID: ${id}`, error.stack);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      this.logger.log(`Removing user with ID: ${id}`);
      await this.usersRepository.delete(id);
      return { message: `User with ID ${id} successfully removed.` };
    } catch (error) {
      this.logger.error(`Error removing user with ID: ${id}`, error.stack);
      throw error;
    }
  }
}
