/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersInfo } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('usersInfo') private userModel: Model<UsersInfo>){}

    createUser(newUser: any){
        const user = new this.userModel(newUser);
        return user.save();
    }

    async getAllUsers(){
        const result = await this.userModel.find().exec();
        return result;
    }

    getUserByName(username: string){
        return this.userModel.find({ name: {$gte: username} }).exec();

    }
}
