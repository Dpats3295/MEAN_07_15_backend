/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    async getAllUsers(@Query('sortBy') sorting: string, @Query('filter') filter: string) {
        console.log(`sort by ${sorting}, filtered with ${filter}`);
        return await this.usersService.getAllUsers().then((data) => console.log(data));
    }

    @Post()
    async createUser(@Body() newUser: any){
        return await this.usersService.createUser(newUser);
    }



}
