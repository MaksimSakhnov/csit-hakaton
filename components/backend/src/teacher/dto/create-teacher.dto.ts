import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"

export class CreateTeacherDto {
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
    @IsString()
    gitHandle: string

    @IsNotEmpty()
    @IsNumber()
    universityId: number
}