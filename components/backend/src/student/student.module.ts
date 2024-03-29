import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentCourse } from 'src/student-course/entities/student-course.entity';
import { Course } from 'src/course/entities/course.entity';
import { Task } from 'src/task/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentCourse, Course, Task])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule { }
