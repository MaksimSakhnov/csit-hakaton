import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Administrator } from 'src/administrator/entities/administrator.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>,
    private jwtService: JwtService
  ) { }

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { firstName, lastName, password, email, role, group, gitHandle, department } = signUpDto

    const hashedPassword = await bcrypt.hash(password, 10)

    if (role == 'STUDENT') {
      if (this.studentRepository.findOne({ where: { email: email }, }))
        throw new BadRequestException('This email is taken');
      else {
        const user = await this.studentRepository.create({
          firstName: firstName,
          lastName: lastName,
          department: department,
          group: group,
          email: email,
          gitHandle: gitHandle,
          password: hashedPassword
        })

        const token = this.jwtService.sign({ id: user.id })

        return { token }
      }
    }

    else if (role == 'TEACHER') {
      if (this.teacherRepository.findOne({ where: { email: email }, }))
        throw new BadRequestException('This email is taken');
      else {
        const user = await this.teacherRepository.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword
        })

        const token = this.jwtService.sign({ id: user.id })

        return { token }
      }
    }

    else if (role == 'ADMINISTRATOR') {
      if (this.administratorRepository.findOne({ where: { email: email }, }))
        throw new BadRequestException('This email is taken');
      else {
        const user = await this.administratorRepository.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword
        })

        const token = this.jwtService.sign({ id: user.id })

        return { token }
      }
    }

    else
      throw new BadRequestException('Role unrecognized')
  }

  async login(loginDto: LoginDto): Promise<{
    id: number
    firstName: string
    lastName: string
    email: string
    role: string
    group: string
    gitHandle: string
    department: string
    token: string
  }> {
    const { email, password, role } = loginDto;

    let user

    if (role == 'STUDENT')
      user = await this.studentRepository.findOne({ where: { email: email }, });
    else if (role == 'TEACHER')
      user = await this.teacherRepository.findOne({ where: { email: email }, });
    else if (role == 'ADMINISTRATOR')
      user = await this.administratorRepository.findOne({ where: { email: email }, });
    else
      throw new BadRequestException('Role unrecognized')

    if (!user) {
      throw new UnauthorizedException('Invalid email')
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const token = this.jwtService.sign({ id: user._id });

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      group: user.group,
      gitHandle: user.gitHandle,
      department: user.department,
      token: token
    };
  }
}