import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll(@Query('teacher_id') teacher_id?: number) {
    if (teacher_id) {
      return this.courseService.findByTeacher(teacher_id);
    }
    else {
      return this.courseService.findAll();
    }
  }

  @Get(':id/students')
  findAllCourseStudents(@Param('id') id: string) {
    return this.courseService.findAllCourseStudents(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('user_id') user_id?: number,
  @Query('role') role?:string) {
    if (role) { return this.courseService.findMy(+id, user_id, role); }
    else { return this.courseService.findOne(+id); }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
