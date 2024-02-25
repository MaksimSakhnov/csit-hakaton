import {instance} from "./axios.api"
import {ICourse, ILoginAdminResponse, IStudent} from "../store/admin/adminSlice.type"
import {IDetailCourse, ITask} from "../store/app/appSlice.type";
import {IUserLoginData} from "../types/userTypes";

export const teacherApi = {
    async getCourses() {
        const response = await instance.get<Array<ICourse>>(
            "courses"
        );
        return response.data;
    },

    async getCurrentCourse(courseId: number, userId?: number, role?: string) {
        const response = await instance.get<IDetailCourse>(`courses/${courseId}?user_id=${userId}&role=${role}`)
        return response.data
    },

    async getStudentsForCourse(courseId: number){
        const response = await instance.get<IStudent[]>(`courses/${courseId}/students`)
        // @ts-ignore
        return response.data.map(el => el.student)
        
    },
    async getTasksForCourse(courseId: number){
        const reponse = await instance.get<ITask[]>(`tasks?course_id=${courseId}`);
        return reponse.data
    },
    async login(data: IUserLoginData){
        const response = await instance.post<ILoginAdminResponse>(`auth/login`, data);

        return response.data
    },
    async checkColaborator(userId: number, courseId: number){
        const response = await instance.get<boolean>(`students/${userId}/collaborator?course_id=${courseId}`)
        return response.data
    }

};