import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from "./db/typeorm.module";
import { StudentModule } from './student/student.module';
import { AdministratorModule } from './administrator/administrator.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    AuthModule,
    StudentModule,
    AdministratorModule,
    TeacherModule,
    CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }