import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { Administrator } from './entities/administrator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>,
  ) { }

  async create(createAdministratorDto: CreateAdministratorDto) {
    const { email, password, } = createAdministratorDto

    const hashedPassword = await bcrypt.hash(password, 10)

    if (await this.administratorRepository.findOne({ where: { email: email }, }))
      throw new BadRequestException('This email is taken');
    else {
      const user = this.administratorRepository.create({
        ...createAdministratorDto,
        password: hashedPassword,
      })

      return await this.administratorRepository.save(user)
    }
  }

  async findAll() {
    return await this.administratorRepository.find();
  }

  async findOne(id: number) {
    return await this.administratorRepository.findOne({
      where: { id }
    })
  }

  async update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    await this.administratorRepository.update({ id }, updateAdministratorDto)
    return await this.administratorRepository.findOne({
      where: { id }
    })
  }

  async remove(id: number) {
    await this.administratorRepository.delete(id)
  }
}
