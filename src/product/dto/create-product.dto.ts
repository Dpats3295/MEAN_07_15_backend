/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    productName: string;

    @IsNumber()
    qunatity: number;

    @IsString({each: true})
    tag: string[];
}
