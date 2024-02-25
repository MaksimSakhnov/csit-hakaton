import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Course } from 'src/course/entities/course.entity';

@Entity('teacher_course')
export class TeacherCourse {
    @PrimaryColumn({ name: 'teacher_id' })
    teacherId: number;
  
    @PrimaryColumn({ name: 'course_id' })
    courseId: number;
  
    @ManyToOne(
      () => Teacher,
      teacher => teacher.courses
    )
    @JoinColumn([{ name: 'teacher_id', referencedColumnName: 'id' }])
    teacher: Teacher[];
  
    @ManyToOne(
      () => Course,
      course => course.teachers
    )
    @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
    courses: Course[];
}