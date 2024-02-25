import type { RootState } from '../store';

function selectTeachersData(state: RootState){
    return state.admin.teachersData;
}

function selectStudentssData(state: RootState){
    return state.admin.studentsData;
}

function selectCoursessData(state: RootState){
    return state.admin.coursesData;
}

function selectAdminData(state: RootState){
    return state.admin.adminData;
}

export {
    selectTeachersData,
    selectStudentssData,
    selectCoursessData,
    selectAdminData
};
