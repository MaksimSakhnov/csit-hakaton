export interface ITeacher {
    id: number;
    firstName: string;
    lastName: string;
    university: number;
    email: string;
    gitHandler: string | null;
    password: string;
}

export interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
    group: number;
    email: string;
    gitHandle: string;
    password: string;
    university: number;
}

export interface ICreateStudent {
    firstName: string;
    lastName: string;
    department: string;
    group: number;
    email: string;
    gitHandler: string;
    password: string;
    university: number;
}

export interface ICreateTeacher {
    firstName: string;
    lastName: string;
    university: number;
    email: string;
    gitHandler: string | null;
    password: string;
}

export interface ICourse {
    id: number;

    name: string;

    description: string;

    password: string;

    repository: string;
    teachers: number[];
}