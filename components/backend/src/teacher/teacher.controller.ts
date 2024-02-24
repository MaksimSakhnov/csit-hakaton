import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PageOptionsDto } from 'src/pagesDtos/page-options.dto';
import { PageDto } from 'src/pagesDtos/page.dto';
import { Teacher } from './entities/teacher.entity';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Teacher>> {
    return this.teacherService.findAll(pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id')
    id: string,
    @Body()
    updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }
}
