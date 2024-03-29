import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    repository: string

    @IsArray()
    teachers:number[]
}
