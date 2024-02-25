import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { UpdateAttemptDto } from './dto/update-attempt.dto';
import { Attempt } from './entities/attempt.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Octokit } from 'octokit';
import { MasterAccountToken } from 'src/constants/masterAccount';

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
      where: { id: id }
    })
  }

  async getCommit(id: number) {
    const attempt = await this.attemptRepository.findOne({ where: { id } })
    const user = attempt.student
    const task = attempt.task
    const course = task.course

    const userHandle = user.gitHandle
    const repositoryName = course.name
    const taskName = task.name
    const octokit = new Octokit({ auth: MasterAccountToken });

    try {
      const res = await octokit.request('GET /repos/{owner}/{repo}/commits/{branch}', {
        owner: userHandle,
        repo: repositoryName,
        branch: taskName,
      })

      const hashCommit = await res.data.sha

      await this.attemptRepository.update({ id }, { hashCommit: hashCommit })
      return await this.attemptRepository.findOne({
        where: { id }
      })
    } catch (error) {
      throw new BadRequestException('Collaborator not found repository or branch')
    }
  }

  async commitCompare(id: number, attempt_id: number) {
    const attempt1 = await this.attemptRepository.findOne({ where: { id } })
    const attempt2 = await this.attemptRepository.findOne({ where: { id: attempt_id } })

    const hashCommit1 = attempt1.hashCommit
    const hashCommit2 = attempt2.hashCommit

    const user = attempt1.student
    const task = attempt1.task
    const course = task.course

    const userHandle = user.gitHandle
    const repositoryName = course.name
    const octokit = new Octokit({ auth: MasterAccountToken });

    try {
      const res = await octokit.request('GET /repos/{owner}/{repo}/compare/{hash1}...{hash2}', {
        owner: userHandle,
        repo: repositoryName,
        hash1: hashCommit1,
        hash2: hashCommit2,
      })

      const hashCommit = await res.data.patch_url

      return (await octokit.request(`GET ${hashCommit}`)).data
    } catch (error) {
      throw new BadRequestException('Collaborator not found repository or branch')
    }
  }

  async findAll(task_id: number) {
    return await this.attemptRepository.find({
      where: { task: { id: task_id } },
      relations: { student: true, task: true }
    });
  }

  async findOne(id: number) {
    return await this.attemptRepository.findOne({
      where: { id }, relations: { task: true, student: true }
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
