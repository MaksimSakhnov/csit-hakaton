import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Course } from "src/course/entities/course.entity"
import { University } from "src/university/entities/university.entity";

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

    @Column()
    student_id: number

    @Column()
    task_id: number

    @Column()
    teacher_id: number

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