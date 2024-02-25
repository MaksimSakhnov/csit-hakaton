import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Task } from "src/task/entities/task.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Student } from "src/student/entities/student.entity";
import { Status } from "./types";

@Entity('attempts')
export class Attempt {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gitLink: string

    @Column()
    timeSent: Date

    @Column({nullable:true})
    timeChecked: Date

    @ManyToOne((type) => Student, {eager:true})
    @JoinColumn({ name: 'studentId' })
    student: Student

    @ManyToOne((type) => Task, {eager:true})
    @JoinColumn({ name: 'taskId' })
    task: Task

    @ManyToOne((type) => Teacher, (teacher) => teacher.attempts)
    @JoinColumn({ name: 'teacherId' })
    teacher: Teacher

    @Column({nullable:true})
    points: number

    @Column({nullable:true})
    review: string

    @Column()
    status: Status
}