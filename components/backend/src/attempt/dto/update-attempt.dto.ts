import { PartialType } from '@nestjs/mapped-types';
import { CreateAttemptDto } from './create-attempt.dto';
import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { Status } from '../entities/types';

export class UpdateAttemptDto extends PartialType(CreateAttemptDto) {
    @IsString()
    gitLink: string

    @IsDate()
    timeSent: Date

    @IsDate()
    timeChecked: Date

    @IsNumber()
    studentId: number

    @IsNumber()
    teacherId:number

    @IsNumber()
    taskId: number

    @IsNumber()
    points: number

    @IsString()
    review: string

    @IsEnum(Status)
    status: Status
}
