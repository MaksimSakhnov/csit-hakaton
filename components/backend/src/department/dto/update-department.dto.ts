import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
    @IsNotEmpty()
    @IsString()
    name: string
}
