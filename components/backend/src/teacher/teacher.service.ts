import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) { }

  async create(createTeacherDto: CreateTeacherDto) {
    const { email, password, } = createTeacherDto

    const hashedPassword = await bcrypt.hash(password, 10)

    if (await this.teacherRepository.findOne({ where: { email: email }, }))
      throw new BadRequestException('This email is taken');
    else {
      const user = this.teacherRepository.create({
        ...createTeacherDto,
        password: hashedPassword,
        courses: [],
      })

      return await this.teacherRepository.save(user)
    }
  }

  async findAll(): Promise<Teacher[]> {
    return await this.teacherRepository.find();
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({
      where: { id }
    })
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    await this.teacherRepository.update({ id }, updateTeacherDto)
    return await this.teacherRepository.findOne({
      where: { id }
    })
  }

  async remove(id: number) {
    await this.teacherRepository.delete(id)
  }
}
