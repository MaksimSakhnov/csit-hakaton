import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Octokit } from 'octokit';

const admin = {
  id: 10,
  firstName: 'Федор',
  lastName: 'Макаревич',
  email: 'mackar@mail.ru',
  password: '12345678123',
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:3000/api
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(3000);

  const octokit = new Octokit();
  octokit.request('POST http://localhost:3000/api/administrators', {
    data: admin
  })
}
bootstrap();
