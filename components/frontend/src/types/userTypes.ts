export interface IUser {
    firstName: string
    lastName: string
    email: string
    role: string
    group: string
    gitHandle: string
    department: string
    token: string
}

export interface IUserRegisterData {
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    group: string
    gitHandle: string
    department: string
}

export interface IUserLoginData {
    email: string
    password: string
    role: string
}

export interface IResponseUser {
    password: string
    email: string
    id: string
    createdAt: string
    updatedAt: string
}

export interface IResponseUserData {
    token: string
}