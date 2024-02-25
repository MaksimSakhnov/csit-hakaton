<<<<<<< HEAD
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, RelationId} from 'typeorm';
=======
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
>>>>>>> cfeb4bf11015d09e8dc11319bd92f72c4eac5fed

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

<<<<<<< HEAD
    @ManyToOne(()=>Course, {cascade:true, eager:true})
    @JoinColumn({name:"courseId"})
    course:Course
=======
    @OneToMany((type) => Attempt, (attempt) => attempt.task)
    attempts?: Attempt[]

    @ManyToOne((type) => Course, { eager: true })
    @JoinColumn({ name: "courseId" })
    course: Course
>>>>>>> cfeb4bf11015d09e8dc11319bd92f72c4eac5fed
}