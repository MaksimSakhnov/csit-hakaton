import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherCourseDto } from './create-teacher-course.dto';

export class UpdateTeacherCourseDto extends PartialType(CreateTeacherCourseDto) {}
