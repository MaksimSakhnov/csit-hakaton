import {ITeacher} from "../admin/adminSlice.type";

export enum appRole  {
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
}

export interface ICourse {
    id: number;
    name: string;
    description: string;
    password: string;
    repository: string;
    teachers: number[];
}

export interface IDetailCourse{
    id: number;
    name: string;
    description: string;
    password: string;
    repository: string;
    teachers: ITeacher[];
    isMy?: boolean;
    tasks?: Array<any>

}