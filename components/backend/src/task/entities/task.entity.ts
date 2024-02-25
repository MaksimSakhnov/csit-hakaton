import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, RelationId} from 'typeorm';

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

    @ManyToOne(()=>Course, {cascade:true, eager:true})
    @JoinColumn({name:"courseId"})
    course:Course
}