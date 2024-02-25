import {instance} from "./axios.api"
import {
    ICourse,
    ICreateCourse,
    ICreateStudent,
    ICreateTeacher, ILoginAdmin, ILoginAdminResponse,
    IStudent,
    ITeacher
} from "../store/admin/adminSlice.type"
import {IUser, IUserLoginData} from "../types/userTypes";

export const AdminApi = {
    async getTeachers() {
        const response = await instance.get<Array<ITeacher>>(
            "teachers"
        );
        return response.data;
    },
    async postTeacher(data: ICreateTeacher) {
        const response = await instance.post<ICreateTeacher>("teachers", data);
        return response.data;
    },
    async getStudents() {
        const response = await instance.get<Array<IStudent>>(
            "students"
        );
        return response.data;
    },
    async postStudents(data: ICreateStudent) {
        const response = await instance.post<ICreateStudent>("students", data);
        return response.data;
    },
    async getCources() {
        const response = await instance.get<Array<ICourse>>(
            "courses"
        );
        return response.data;
    },
    async postCources(data: ICreateCourse) {
        const response = await instance.post<ICreateCourse>("courses", data);
        return response.data;
    },

    async login(userData: ILoginAdmin) {
        const { data } = await instance.post<ILoginAdminResponse>('auth/login', userData)
        return data
    },

};