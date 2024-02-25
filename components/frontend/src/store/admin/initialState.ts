import {ICourse, ILoginAdminResponse, IStudent, ITeacher} from "./adminSlice.type";


export const adminInitialState = {
    teachersData: [] as ITeacher[],
    studentsData: [] as IStudent[],
    coursesData: [] as ICourse[],
    adminData: null as null | ILoginAdminResponse

}