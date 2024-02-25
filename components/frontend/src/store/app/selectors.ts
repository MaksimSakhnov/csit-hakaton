import type { RootState } from '../store';

function selectRole(state: RootState){
    return state.app.role
}

function selectCourses(state: RootState){
    return state.app.coursesData
}

function selectCurrentCourse(state: RootState){
    return state.app.currentCourse
}

function selectStudentsForCourse(state: RootState){
    return state.app.studentsForCourse;
}

export {
    selectRole,
    selectCourses,
    selectCurrentCourse,
    selectStudentsForCourse
};
