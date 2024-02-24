import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { Course } from "src/course/entities/course.entity"
import { University } from "src/university/entities/university.entity";
import { TeacherCourse } from "src/teacher-course/entities/teacher-course.entity";

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

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToMany(() => Course, (course)=>course.students)
    courses?: Course[];

    @ManyToOne((type)=>University, (university)=>university.teachers)
    university:University
}