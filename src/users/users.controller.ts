/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    async getAllUsers() {
        return await this.usersService.getAllUsers().then((data) => console.log(data));
    }

    @Get(':name')
    async getUserByName(@Param('name') name: string) {
        return await this.usersService.getUserByName(name);

    }

    @Post()
    async createUser(@Body() newUser: any){
        return await this.usersService.createUser(newUser);
    }

}
