import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCourseService } from './student-course.service';
import { UpdateStudentCourseDto } from './dto/update-student-course.dto';
import { AddStudentCourseDto } from './dto/add-student-course.dto';

@Controller('enroll')
export class StudentCourseController {
  constructor(private readonly studentCourseService: StudentCourseService) {}

  @Post()
  create(@Body() addStudentCourseDto: AddStudentCourseDto) {
    return this.studentCourseService.addCourse(addStudentCourseDto);
  }

  @Get()
  findAll() {
    return this.studentCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCourseDto: UpdateStudentCourseDto) {
    return this.studentCourseService.update(+id, updateStudentCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCourseService.remove(+id);
  }
}
