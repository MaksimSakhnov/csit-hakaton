import {appRole, IDetailCourse} from "./appSlice.type";
import {ICourse} from "../admin/adminSlice.type";


export const appInitialState = {
    role: appRole.TEACHER as appRole,
    coursesData: [] as ICourse[],
    currentCourse: null as null | IDetailCourse
}