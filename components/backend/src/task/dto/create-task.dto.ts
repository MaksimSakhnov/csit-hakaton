import { IsDate, IsString, IsNumber } from "class-validator"

export class CreateTaskDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsDate()
    due_date: Date

    @IsNumber()
    max_points: number
}