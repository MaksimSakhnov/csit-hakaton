import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
  ) {}

  public async create(createCourseDto: CreateCourseDto) {
    const newCourse = this.courseRepository.create(createCourseDto)
    return await this.courseRepository.save(newCourse)
  }

  public async findAll() {
    return await this.courseRepository.find()
  }

  public async findOne(id: number) {
    return await this.courseRepository.findOne({
      where: { id }
    })
  }

  public async update(id: number, updateCourseDto: UpdateCourseDto) {
    await this.courseRepository.update({ id }, updateCourseDto)
    return await this.courseRepository.findOne({
      where: { id }
    })
  }

  public async remove(id: number) {
    await this.courseRepository.delete(id)
  }
}

