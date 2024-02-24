import { PartialType } from '@nestjs/mapped-types';
import { AddStudentCourseDto } from './add-student-course.dto';

export class UpdateStudentCourseDto extends PartialType(AddStudentCourseDto) {}
