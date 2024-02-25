import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  public async create(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create(createTaskDto)
    const id = (await this.taskRepository.save(newTask)).id
    return await this.taskRepository.findOne({
    where: {id: id}})
  }

  public async findAll() {
      return await this.taskRepository.find();
  }

  public async findByCourse(course_id:number) {
    return await this.taskRepository.find({where: {course:{id:course_id}}})
  }

  public async findOne(id: number) {
    return await this.taskRepository.findOne({
      where: { id }
    })
  }

  public async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepository.update({ id }, updateTaskDto)
    return await this.taskRepository.findOne({
      where: { id }
    })
  }

  public async remove(id: number) {
    await this.taskRepository.delete(id)
  }
}
