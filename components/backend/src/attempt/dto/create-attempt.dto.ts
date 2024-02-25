import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateAttemptDto {
    @IsNotEmpty()
    @IsString()
    gitLink: string

    @IsNotEmpty()
    @IsDate()
    timeSent: Date

    @IsNotEmpty()
    @IsDate()
    timeChecked: Date

    @IsNotEmpty()
    @IsNumber()
    student_id: number

    @IsNotEmpty()
    @IsNumber()
    task_id: number

    @IsNotEmpty()
    @IsNumber()
    teacher_id: number

    @IsNotEmpty()
    @IsNumber()
    points: number

    @IsNotEmpty()
    @IsString()
    review: string

    @IsNotEmpty()
    @IsString()
    status: string
}
