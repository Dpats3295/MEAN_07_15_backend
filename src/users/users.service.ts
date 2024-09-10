/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersInfo } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('usersInfo') private userModel: Model<UsersInfo>){}

    async createUser(newUser: any){
        return await new this.userModel(newUser).save();
    }

    async getAllUsers(){
        return await this.userModel.find().exec();
    }

    async getUserByName(username: string){
        return await this.userModel.find({ name: {$gte: username} }).exec();
    }
}
