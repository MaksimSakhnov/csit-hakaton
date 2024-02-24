import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable, OneToMany } from "typeorm";

import { Teacher } from "src/teacher/entities/teacher.entity";
import { Student } from "src/student/entities/student.entity";
import { Task } from "src/task/entities/task.entity";

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    password: string

    @Column()
    repository: string

    @ManyToMany((type)=>Teacher)
    @JoinTable()
    teachers: Teacher[]

    @ManyToMany((type)=>Student)
    @JoinTable()
    students:Student[]

    @OneToMany((type)=>Task, (task)=>task.course)
    tasks: Task[]
}
