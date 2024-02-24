import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Entity('universities')
export class University {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany((type)=>Student, (student)=>student.university)
    students: Student[]

    @OneToMany((type)=>Teacher, (teacher)=>teacher.university)
    teachers: Teacher[]
}