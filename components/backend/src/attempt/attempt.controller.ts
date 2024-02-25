import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AttemptService } from './attempt.service';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { UpdateAttemptDto } from './dto/update-attempt.dto';

@Controller('attempts')
export class AttemptController {
  constructor(private readonly attemptService: AttemptService) { }

  @Post()
  create(@Body() createAttemptDto: CreateAttemptDto) {
    return this.attemptService.create(createAttemptDto);
  }

  @Get()
  findAll(@Query('task_id') task_id?: number) {
    return this.attemptService.findAll(task_id);
  }

  @Get(':id/commit')
  getCommit(@Param('id') id: number) {
    return this.attemptService.getCommit(+id);
  }

  @Get(':id/compare')
  commitCompare(
    @Param('id') id: number,
    @Query('attempt_id') attempt_id: number
  ) {
    return this.attemptService.commitCompare(+id, attempt_id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.attemptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttemptDto: UpdateAttemptDto) {
    return this.attemptService.update(+id, updateAttemptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attemptService.remove(+id);
  }
}
