import { IsDate, IsEmail, IsString, IsNumber, IsNotEmpty, MinLength } from 'class-validator'

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsString()
    department: string

    @IsNotEmpty()
    @IsNumber()
    group: number

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    gitHandle: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: "Password must be more than 5 symbols" })
    password: string

    @IsNotEmpty()
    @IsNumber()
    universityId: number
}
