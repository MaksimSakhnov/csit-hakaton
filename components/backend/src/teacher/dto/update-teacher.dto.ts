import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Course } from 'src/course/entities/course.entity';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Please enter correct email" })
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: "Password must be more than 5 symbols" })
    password: string

    @IsNotEmpty()
    @IsNumber()
    id_university: number

    @IsNotEmpty()
    @IsString()
    gitHandle: string

    courses: Course[]
}
