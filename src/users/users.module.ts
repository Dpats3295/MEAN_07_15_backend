/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersInfoSchema } from './users.schema';

@Module({
    controllers: [UsersController],
    imports: [
        MongooseModule.forFeature([
            { name: 'usersInfo', schema: UsersInfoSchema, collection: 'userInfo' }
        ])
    ],
    providers: [UsersService],
})
export class UsersModule { }
