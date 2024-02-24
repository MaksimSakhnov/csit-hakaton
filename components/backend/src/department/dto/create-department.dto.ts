import { IsNotEmpty, IsString } from "class-validator";

export class CreateDepartmentDto {
    @IsNotEmpty()
    @IsString()
    name: string
}
