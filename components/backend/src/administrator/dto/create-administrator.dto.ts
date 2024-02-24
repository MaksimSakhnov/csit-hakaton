import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateAdministratorDto {
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: "Password must be more than 5 symbols" })
    password: string
}