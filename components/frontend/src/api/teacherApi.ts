import {instance} from "./axios.api"
import {ICourse, IStudent} from "../store/admin/adminSlice.type"
import {IDetailCourse, ITask} from "../store/app/appSlice.type";

export const teacherApi = {
    async getCourses() {
        const response = await instance.get<Array<ICourse>>(
            "courses"
        );
        return response.data;
    },

    async getCurrentCourse(courseId: number) {
        const response = await instance.get<IDetailCourse>(`courses/${courseId}`)
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
    }

};