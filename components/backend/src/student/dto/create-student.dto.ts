import {IsDate, IsEmail, IsString, IsNumber} from 'class-validator'

export class CreateStudentDto {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    department: string

    @IsNumber()
    group: string

    @IsEmail()
    email: string

    @IsString()
    gitHandle: string

    @IsString()
    password: string

    @IsDate()
    createdAt: Date

    @IsDate()
    updatedAt: Date
}
