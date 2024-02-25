import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Course } from "src/course/entities/course.entity"
import { University } from "src/university/entities/university.entity";
import { TeacherCourse } from "src/teacher-course/entities/teacher-course.entity";
import { Attempt } from "src/attempt/entities/attempt.entity";

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
    gitHandle: string

    @OneToMany((type) => Attempt, (attempt) => attempt.task)
    attempts?: Attempt[]

    @ManyToMany((type) => Course)
    courses?: Course[]

    @ManyToOne((type) => University, (university) => university.teachers)
    @JoinColumn({ name: 'universityId' })
    university: University

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}