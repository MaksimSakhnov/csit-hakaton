import { IsDate, IsEmail, IsString } from "class-validator";

export class CreateTeacherDto {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsDate()
    createdAt: Date

    @IsDate()
    updatedAt: Date
}
