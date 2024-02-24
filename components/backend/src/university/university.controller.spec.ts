import { Test, TestingModule } from '@nestjs/testing';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

describe('UniversityController', () => {
  let controller: UniversityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversityController],
      providers: [UniversityService],
    }).compile();

    controller = module.get<UniversityController>(UniversityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
