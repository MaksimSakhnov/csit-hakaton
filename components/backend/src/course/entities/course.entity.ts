import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable, OneToMany, RelationId, PrimaryColumnCannotBeNullableError } from "typeorm";

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

    @ManyToMany(() => Teacher)
    @JoinTable({name:"teacher_course",
    joinColumn: {
        name: 'course_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'teacher_id',
        referencedColumnName: 'id',
      },})
    teachers?: Teacher[];

    @ManyToMany(() => Student)
    students?: Student[];

    @OneToMany((type)=>Task, (task)=>task.course)
    tasks?: Task[]
}
