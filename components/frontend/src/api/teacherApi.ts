import {instance} from "./axios.api"
import {ICourse} from "../store/admin/adminSlice.type"
import {IDetailCourse} from "../store/app/appSlice.type";

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
    }

};