import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddStudentCourseDto {

    @IsNotEmpty()
    @IsNumber()
    studentId:number

    @IsNotEmpty()
    @IsNumber()
    courseId:number

    @IsNotEmpty()
    @IsString()
    password:string
}