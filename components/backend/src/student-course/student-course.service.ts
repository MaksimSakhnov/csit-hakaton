import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateStudentCourseDto } from './dto/update-student-course.dto';
import { StudentCourse } from './entities/student-course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from 'src/course/entities/course.entity';
import { AddStudentCourseDto } from './dto/add-student-course.dto';

@Injectable()
export class StudentCourseService {
  constructor(    
  @InjectRepository(StudentCourse)
  private readonly studentCourseRepository: Repository<StudentCourse>,
  @InjectRepository(Course)
  private readonly courseRepository: Repository<Course>){}

  async addCourse(addStudentCourseDto:AddStudentCourseDto) {
    const {studentId, courseId, password} = addStudentCourseDto;
    if (await this.studentCourseRepository.findOne({ where: { studentId:studentId,courseId:courseId  }, }))
      throw new BadRequestException('Already added to course');
    else{
      const course = await this.courseRepository.findOne({where:{id:courseId}})
      if (password == course.password) {
        this.studentCourseRepository
        .save(this.studentCourseRepository.create({studentId:studentId, courseId:courseId}))
        return {"status":"ok"};
      }
      else
        throw new BadRequestException('The password is incorrect.');
    }
  }

  findAll() {
    return `This action returns all studentCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCourse`;
  }

  update(id: number, updateStudentCourseDto: UpdateStudentCourseDto) {
    return `This action updates a #${id} studentCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCourse`;
  }
}
