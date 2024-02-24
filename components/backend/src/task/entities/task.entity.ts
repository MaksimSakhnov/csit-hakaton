import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

import { Course } from 'src/course/entities/course.entity';


@Entity('tasks')
export class Task{
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

    @ManyToOne((type)=>Course, (course)=>course.tasks)
    course: Course
}