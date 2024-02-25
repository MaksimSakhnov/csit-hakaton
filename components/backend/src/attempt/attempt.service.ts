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
    const newAttempt = this.attemptRepository.create(createAttemptDto)
    const id = (await this.attemptRepository.save({...newAttempt, 
      task:{id:createAttemptDto.taskId}, student:{id:createAttemptDto.studentId}})).id
    return await this.attemptRepository.findOne({
    where: {id: id}})
  }

  async findAll(task_id: number){
    return await this.attemptRepository.find({where:{task:{id:task_id}}, 
      relations:{student:true, task:true}});
  }

  async findOne(id: number) {
    return await this.attemptRepository.findOne({
      where: { id }
    })
  }

  async update(id: number, updateAttemptDto: UpdateAttemptDto) {
    const {timeChecked, review, points, status, teacherId} = updateAttemptDto
    await this.attemptRepository.update({ id }, 
      {timeChecked:timeChecked, review:review, points:points, status:status, teacher:{id:teacherId}})
    return await this.attemptRepository.findOne({
      where: { id }, relations:{teacher:true}
    })
  }

  async remove(id: number) {
    await this.attemptRepository.delete(id)
  }
}
