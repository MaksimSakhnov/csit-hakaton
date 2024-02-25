import {appRole, IDetailCourse} from "./appSlice.type";
import {ICourse, ILoginAdminResponse, IStudent} from "../admin/adminSlice.type";


export const appInitialState = {
    role: appRole.TEACHER as appRole,
    coursesData: [] as ICourse[],
    currentCourse: null as null | IDetailCourse,
    studentsForCourse: null as null | IStudent[],
}