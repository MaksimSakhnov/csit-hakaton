import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

import { Course } from "src/course/entities/course.entity";
import { University } from "src/university/entities/university.entity";

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    department: string

    @Column()
    group: string

    @Column()
    email: string

    @Column()
    gitHandle: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToMany((type)=>Course)
    @JoinTable()
    courses: Course[]

    @ManyToOne((type)=>University, (university)=>university.students)
    university: University
}
