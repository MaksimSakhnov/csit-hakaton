import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>  
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
