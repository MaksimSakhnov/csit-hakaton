import {ITeacher} from "../admin/adminSlice.type";
import {freeze} from "@reduxjs/toolkit";

export enum appRole  {
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
    ADMIN = 'ADMINISTARTOR',
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

export interface ITask {
    id: number,
    name:string,
    description: string,
    due_date: string,
    max_points: number,
}