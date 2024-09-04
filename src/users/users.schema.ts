/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class UsersInfo {
    @Prop({required: true})
    name: string;
    
    @Prop()
    age: number;
    
    @Prop()
    email: string;

}

export const UsersInfoSchema = SchemaFactory.createForClass(UsersInfo);