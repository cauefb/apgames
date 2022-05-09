import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserProfile } from './mappers/user.profle';
import { UsersService } from './users.service';
//import { UsersRepository } from './user.repository'
//import { MongooseModule } from '@nestjs/mongoose';
import {UserEntity} from './entities/user.entity';
//import {UserSchema} from './schemas/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UsersController],
  providers: [UserProfile,UsersService],
  exports: [UsersService]
})
export class UsersModule {}
