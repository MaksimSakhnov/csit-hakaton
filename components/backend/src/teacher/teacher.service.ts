import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { PageOptionsDto } from 'src/pagesDtos/page-options.dto';
import { PageDto } from 'src/pagesDtos/page.dto';
import { PageMetaDto } from 'src/pagesDtos/page-meta.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) { }

  async create(createTeacherDto: CreateTeacherDto) {
    const { firstName, lastName, password, email, gitHandle, id_university } = createTeacherDto

    const hashedPassword = await bcrypt.hash(password, 10)

    if (this.teacherRepository.findOne({ where: { email: email }, }))
      throw new BadRequestException('This email is taken');
    else {
      const user = this.teacherRepository.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        id_university: id_university,
        gitHandle: gitHandle,
        // courses: [],
      })

      return user
    }
  }

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<Teacher>> {
    const queryBuilder = this.teacherRepository.createQueryBuilder('user');

    queryBuilder
      .orderBy('teacher.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
