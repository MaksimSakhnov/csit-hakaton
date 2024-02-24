import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Administrator } from 'src/administrator/entities/administrator.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        }
      }
    }),
    TypeOrmModule.forFeature([Administrator]),
    TypeOrmModule.forFeature([Teacher]),
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})

export class AuthModule { }
