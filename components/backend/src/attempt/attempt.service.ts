import { Injectable } from '@nestjs/common';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { UpdateAttemptDto } from './dto/update-attempt.dto';
import { Attempt } from './entities/attempt.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttemptService {
  constructor(
    @InjectRepository(Attempt)
    private readonly attemptRepository: Repository<Attempt>,
  ) { }

  create(createAttemptDto: CreateAttemptDto) {
    return 'This action adds a new attempt';
  }

  async findAll(): Promise<Attempt[]> {
    return await this.attemptRepository.find();
  }

  async findOne(id: number) {
    return await this.attemptRepository.findOne({
      where: { id }
    })
  }

  async update(id: number, updateAttemptDto: UpdateAttemptDto) {
    await this.attemptRepository.update({ id }, updateAttemptDto)
    return await this.attemptRepository.findOne({
      where: { id }
    })
  }

  async remove(id: number) {
    await this.attemptRepository.delete(id)
  }
}
