import { Injectable } from '@nestjs/common';
import { CreateTeacherCourseDto } from './dto/create-teacher-course.dto';
import { UpdateTeacherCourseDto } from './dto/update-teacher-course.dto';

@Injectable()
export class TeacherCourseService {
  create(createTeacherCourseDto: CreateTeacherCourseDto) {
    return 'This action adds a new teacherCourse';
  }

  findAll() {
    return `This action returns all teacherCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherCourse`;
  }

  update(id: number, updateTeacherCourseDto: UpdateTeacherCourseDto) {
    return `This action updates a #${id} teacherCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherCourse`;
  }
}
