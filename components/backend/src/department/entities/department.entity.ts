import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity('departments')
export class Department {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
