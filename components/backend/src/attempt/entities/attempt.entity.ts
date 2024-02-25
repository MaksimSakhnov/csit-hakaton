import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Course } from "src/course/entities/course.entity"
import { University } from "src/university/entities/university.entity";
import { Task } from "src/task/entities/task.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Student } from "src/student/entities/student.entity";

@Entity('attempts')
export class Attempt {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gitLink: string

    @Column()
    timeSent: Date

    @Column()
    timeChecked: Date

    @ManyToOne((type) => Student, (student) => student.attempts)
    @JoinColumn({ name: 'studentId' })
    student: Student

    @ManyToOne((type) => Task, (task) => task.attempts)
    @JoinColumn({ name: 'taskId' })
    task: Task

    @ManyToOne((type) => Teacher, (teacher) => teacher.attempts)
    @JoinColumn({ name: 'teacherId' })
    teacher: Teacher

    @Column()
    points: number

    @Column()
    review: string

    @Column()
    status: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}