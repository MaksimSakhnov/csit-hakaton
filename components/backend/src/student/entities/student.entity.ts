import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

import { Course } from "src/course/entities/course.entity";
import { University } from "src/university/entities/university.entity";
import { Attempt } from "src/attempt/entities/attempt.entity";

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  department: string

  @Column()
  group: number

  @Column()
  email: string

  @Column()
  gitHandle: string

  @Column()
  password: string

  @ManyToMany(() => Course)
  @JoinTable({
    name: "student_course",
    joinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  courses?: Course[];

  @ManyToOne((type) => University, (university) => university.students,)
  @JoinColumn({ name: 'universityId' })
  university: University

  @OneToMany((type) => Attempt, (attempt) => attempt.task)
  attempts?: Attempt[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
