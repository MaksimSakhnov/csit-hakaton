import { Module } from '@nestjs/common';
import { TeacherCourseService } from './teacher-course.service';
import { TeacherCourseController } from './teacher-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherCourse } from './entities/teacher-course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TeacherCourse])],
  controllers: [TeacherCourseController],
  providers: [TeacherCourseService],
})
export class TeacherCourseModule {}
