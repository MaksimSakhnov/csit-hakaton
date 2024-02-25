import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Course } from 'src/course/entities/course.entity';
import { Attempt } from 'src/attempt/entities/attempt.entity';


@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    due_date: Date

    @Column()
    max_points: number

    @OneToMany((type) => Attempt, (attempt) => attempt.task)
    attempts?: Attempt[]

    @ManyToOne((type) => Course, { eager: true })
    @JoinColumn({ name: "courseId" })
    course: Course
}