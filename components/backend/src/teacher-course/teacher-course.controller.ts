import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherCourseService } from './teacher-course.service';
import { CreateTeacherCourseDto } from './dto/create-teacher-course.dto';
import { UpdateTeacherCourseDto } from './dto/update-teacher-course.dto';

@Controller('teacher-course')
export class TeacherCourseController {
  constructor(private readonly teacherCourseService: TeacherCourseService) {}

  @Post()
  create(@Body() createTeacherCourseDto: CreateTeacherCourseDto) {
    return this.teacherCourseService.create(createTeacherCourseDto);
  }

  @Get()
  findAll() {
    return this.teacherCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherCourseDto: UpdateTeacherCourseDto) {
    return this.teacherCourseService.update(+id, updateTeacherCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherCourseService.remove(+id);
  }
}
