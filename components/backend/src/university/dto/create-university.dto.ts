import { IsString } from "class-validator";

export class CreateUniversityDto {
    @IsString()
    name: string
}