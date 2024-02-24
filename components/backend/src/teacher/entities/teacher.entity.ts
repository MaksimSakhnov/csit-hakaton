import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Course } from "src/course/entities/course.entity"
import { University } from "src/university/entities/university.entity";

@Entity('teachers')
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    id_university: number

    @Column()
    gitHandle: string

    @ManyToMany((type) => Course)
    @JoinTable()
    courses: Course[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne((type)=>University, (university)=>university.teachers)
    university:University
}