import { Module } from '@nestjs/common';
import { StudentCourseService } from './student-course.service';
import { StudentCourseController } from './student-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from './entities/student-course.entity';
import { Course } from 'src/course/entities/course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StudentCourse, Course])],
  controllers: [StudentCourseController],
  providers: [StudentCourseService],
})
export class StudentCourseModule {}
