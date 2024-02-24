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

export {
    selectTeachersData,
    selectStudentssData,
    selectCoursessData
};
