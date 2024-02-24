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

export {
    selectRole,
    selectCourses,
    selectCurrentCourse
};
