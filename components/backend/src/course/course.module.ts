import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { TeacherCourse } from 'src/teacher-course/entities/teacher-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, TeacherCourse])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
