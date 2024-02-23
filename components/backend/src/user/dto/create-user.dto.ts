import { MinLength } from "class-validator"

export class CreateUserDto {
    @MinLength(3, { message: 'Username must be more than 2 symbols' })
    username: string

    @MinLength(6, { message: 'Password must be more than 5 symbols' })
    password: string
}