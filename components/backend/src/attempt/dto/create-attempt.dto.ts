import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Status } from "../entities/types"

export class CreateAttemptDto {
    @IsNotEmpty()
    @IsString()
    gitLink: string

    @IsNotEmpty()
    @IsDate()
    timeSent: Date

    @IsDate()
    timeChecked: Date

    @IsNumber()
    studentId: number

    @IsNumber()
    taskId: number

    @IsNumber()
    points: number

    @IsString()
    review: string

    @IsNotEmpty()
    @IsEnum(Status)
    status: Status
}
