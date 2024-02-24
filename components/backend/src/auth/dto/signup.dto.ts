import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @IsNotEmpty()
    @IsEmail({}, { message: "Please enter correct email" })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: "Password must be more than 6 symbols." })
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly role: string;

    readonly group: number;

    readonly gitHandle: string;

    readonly department: string;
}