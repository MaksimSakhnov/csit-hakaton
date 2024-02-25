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

  public async create(createAttemptDto: CreateAttemptDto) {
    const newTask = this.attemptRepository.create(createAttemptDto)
    const id = (await this.attemptRepository.save(newTask)).id
    return await this.attemptRepository.findOne({
    where: {id: id}})
  }

  async findAll(task_id: number){
    return await this.attemptRepository.find({where:{task:{id:task_id}}, 
      relations:{student:true, task:true}});
  }

  async findOne(id: number) {
    return await this.attemptRepository.findOne({
      where: { id }, relations:{task:true, student:true}
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
