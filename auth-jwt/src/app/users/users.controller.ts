import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';


@ApiTags('users')
@Controller('api/v1/users')
//
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    async index() {
        console.log("get")
        return await this.usersService.findAll();
    }

    @Post()
    async store(@Body() body: CreateUserDto) {
        console.log(body)
        return await this.usersService.store(body);
    }

    @Get(':id')
    async show(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id: string) {
        console.log(id)
        return this.usersService.destroy(id)
    }
}
