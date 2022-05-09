import { Injectable, NotFoundException } from '@nestjs/common';
import { Mapper } from '@automapper/core';

import { InjectMapper } from '@automapper/nestjs';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {  FindOneOptions, Repository } from 'typeorm';
import { FindConditions } from 'typeorm/find-options/FindConditions';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity)
  private readonly usersRepository: Repository<UserEntity>,
    @InjectMapper() private mapper: Mapper,) { }

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email'],
    });
  }
  async findOneOrFail(
    conditions: FindConditions<UserEntity>,
    options?: FindOneOptions<UserEntity>,
  ) {
    try {
      return await this.usersRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  async store(createUserDto: CreateUserDto) {
    const userE = this.mapper.map(
      createUserDto,
      CreateUserDto,
      UserEntity,
    );
    console.log(userE)
    const user = this.usersRepository.create(userE);
    return await this.usersRepository.save(user);
  }

 async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userE = this.mapper.map(
      updateUserDto,
      UpdateUserDto,
      UserEntity
    );
    const user = await this.findOneOrFail({ id });
    this.usersRepository.merge(user, userE);
    return await this.usersRepository.save(user);
  }

  async destroy(id: string) {
    
    await this.usersRepository.findOneOrFail({ id });
    this.usersRepository.delete({ id });
  }

  
}
