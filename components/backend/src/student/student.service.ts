import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { Course } from 'src/course/entities/course.entity';
import { Octokit } from 'octokit';
import { MasterAccountToken } from 'src/constants/masterAccount';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    const { email, password } = createStudentDto
    const hashedPassword = await bcrypt.hash(password, 10)

    if (await this.studentRepository.findOne({ where: { email: email }, }))
      throw new BadRequestException('This email is taken');
    else {
      const user = this.studentRepository.create({
        ...createStudentDto,
        password: hashedPassword,
        courses: [],
      })

      return await this.studentRepository.save(user)
    }
  }

  async findCollaborator(id: number, course_id: number) {
    const user = await this.studentRepository.findOne({
      where: { id }
    })

    const course = await this.courseRepository.findOne({
      where: { id: course_id }
    })

    const userHandle = user.gitHandle
    const repositoryName = course.repository
    const octokit = new Octokit({ auth: MasterAccountToken });

    try {
      const res = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: userHandle,
        repo: repositoryName,
      })

      return true
    } catch (error) {
      throw new BadRequestException('Collaborator not found your repository')
    }
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({
      where: { id }
    })
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepository.update({ id }, updateStudentDto)
    return await this.studentRepository.findOne({
      where: { id }
    })
  }

  async remove(id: number) {
    await this.studentRepository.delete(id)
  }
}
