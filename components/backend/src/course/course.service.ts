import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

import { TeacherCourse } from 'src/teacher-course/entities/teacher-course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
    @InjectRepository(TeacherCourse) private readonly teacherCourseRepository: Repository<TeacherCourse>
  ) {}

  public async create(createCourseDto: CreateCourseDto) {
    const {name, description, password, repository, teachers} = createCourseDto
    const newCourse = await this.courseRepository.save(this.courseRepository.create(
      {name:name, description:description, password:password, repository:repository})
    )
    teachers.forEach(async tid => 
      await this.teacherCourseRepository.save(this.teacherCourseRepository.create({courseId:newCourse.id, teacherId:tid}))
      )
    await this.courseRepository.save(newCourse)
    return await this.courseRepository.find({
      where: { id: newCourse.id },
      relations: {teachers: true}
    })
  }

  public async findAll() {
    return await this.courseRepository.find({relations: {teachers: true}})
  }

  public async findOne(id: number) {
    return await this.courseRepository.findOne({
      where: { id },
      relations: {teachers: true}
    })
  }

  public async update(id: number, updateCourseDto: UpdateCourseDto) {
    const {name, description, password, repository, teachers} = updateCourseDto
    await this.courseRepository.update({ id }, 
      {name:name, description : description, password: password, repository:repository})
    return await this.courseRepository.findOne({
      where: { id }
    })
  }

  public async remove(id: number) {
    await this.courseRepository.delete(id)
  }
}

