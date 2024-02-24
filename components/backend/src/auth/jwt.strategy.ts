import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Administrator } from "src/administrator/entities/administrator.entity";
import { Student } from "src/student/entities/student.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Repository } from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
        @InjectRepository(Administrator)
        private readonly administratorRepository: Repository<Administrator>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        });
    }

    async validate(payload) {
        const { id, role } = payload;
        let user: any | null = null

        if (role == 'STUDENT')
            user = await this.studentRepository.findOne({ where: { id: id }, });
        else if (role == 'TEACHER')
            user = await this.teacherRepository.findOne({ where: { id: id }, });
        else if (role == 'ADMINISTRATOR')
            user = await this.administratorRepository.findOne({ where: { id: id }, });
        else
            throw new BadRequestException('Role unrecognized')

        if (!user) {
            throw new UnauthorizedException('Login first to access this endpoint.')
        }

        return user;
    }
}