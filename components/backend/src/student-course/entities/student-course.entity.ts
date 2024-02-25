import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Course } from 'src/course/entities/course.entity';

@Entity('student_course')
export class StudentCourse {
    @PrimaryColumn({ name: 'student_id' })
    studentId: number;
  
    @PrimaryColumn({ name: 'course_id' })
    courseId: number;
  
    @ManyToOne(
      () => Student,
      student => student.courses
    )
    @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
    student: Student[];
  
    @ManyToOne(
      () => Course,
      course => course.students
    )
    @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
    courses: Course[];
}