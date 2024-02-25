import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config.module';
import { TypeOrmModule } from "./db/typeorm.module";
import { StudentModule } from './student/student.module';
import { AdministratorModule } from './administrator/administrator.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { UniversityModule } from './university/university.module';
import { TaskModule } from './task/task.module';
import { TeacherCourseModule } from './teacher-course/teacher-course.module';
import { StudentCourseModule } from './student-course/student-course.module';
import { AttemptModule } from './attempt/attempt.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    AuthModule,
    StudentModule,
    AdministratorModule,
    TeacherModule,
    CourseModule,
    UniversityModule,
    TaskModule,
    TeacherCourseModule,
    StudentCourseModule,
    AttemptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }