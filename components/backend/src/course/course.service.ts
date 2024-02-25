import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { In, Repository } from 'typeorm';

import { TeacherCourse } from 'src/teacher-course/entities/teacher-course.entity';
import { StudentCourse } from 'src/student-course/entities/student-course.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Task } from 'src/task/entities/task.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(TeacherCourse)
    private readonly teacherCourseRepository: Repository<TeacherCourse>,
    @InjectRepository(StudentCourse)
    private readonly studentCourseRepository: Repository<StudentCourse>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>
  ) { }

  public async create(createCourseDto: CreateCourseDto) {
    const { name, description, password, repository, teachers } = createCourseDto
    const newCourse = await this.courseRepository.save(this.courseRepository.create(
      { name: name, description: description, password: password, repository: repository })
    )
    teachers.forEach(async tid =>
      await this.teacherCourseRepository.save(this.teacherCourseRepository.create({ courseId: newCourse.id, teacherId: tid }))
    )
    await this.courseRepository.save(newCourse)
    return await this.courseRepository.find({
      where: { id: newCourse.id },
      relations: { teachers: true }
    })
  }

  public async findAll() {
    return await this.courseRepository.find({ relations: { teachers: true } })
  }

  public async findAllCourseStudents(id: number) {
    const studentsIds = (await this.studentCourseRepository.find({ where: { courseId: id }, relations: { student: true } }))
    return studentsIds
  }

  public async findByTeacher(teacher_id: number) {
    const courses = (await this.teacherCourseRepository.find({ where: { teacherId: teacher_id }, }))
      .map(val => val.courseId)
     await this.courseRepository.find({ where: { id: In(courses) }, relations: { teachers: true } })
  }

  public async findMy(id: number, userid: number, role:string) {
    if (role == 's') {
      const rel = await this.studentCourseRepository.findOne({where:{studentId:userid, courseId:id}})
      const c = await this.courseRepository.findOne({where:{id}, relations:{teachers:true, tasks:true}})
      if (rel) {
        console.log(rel);
        return {...c, 'isMy':true}
      }
      else
        return {...c, 'isMy':false}
    }
    else {
      const rel = await this.teacherCourseRepository.findOne({where:{teacherId:userid, courseId:id}})
      const c = await this.courseRepository.findOne({where:{id}, relations:{teachers:true, tasks:true}})
      if (rel){
        return {...c, 'isMy':true}
      }
      else
        return {...c, 'isMy':false}
    }
  }

  public async findOne(id:number) {
    return await this.courseRepository.findOne({where:{id}, relations:{teachers:true, tasks:true}})

  }

  public async update(id: number, updateCourseDto: UpdateCourseDto) {
    const { name, description, password, repository, teachers } = updateCourseDto
    await this.courseRepository.update({ id },
      { name: name, description: description, password: password, repository: repository })
    return await this.courseRepository.findOne({
      where: { id }
    })
  }

  public async remove(id: number) {
    await this.courseRepository.delete(id)
  }
}

