import { Module } from '@nestjs/common';
import { AttemptService } from './attempt.service';
import { AttemptController } from './attempt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attempt } from './entities/attempt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attempt])],
  controllers: [AttemptController],
  providers: [AttemptService],
})
export class AttemptModule { }
