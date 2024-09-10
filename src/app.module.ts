/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, 
    ProductModule, 
    MongooseModule.forRoot(
      'mongodb+srv://dpats9523:FjjtIiO5wd3CbSv1@cluster0.lw6i1.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0'
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
