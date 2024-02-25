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

function selectTasksForCourse(state: RootState){
    return state.app.tasksForCourse;
}

function selectUserData(state: RootState){
    return state.app.userData;
}

function selectIsLoading(state: RootState){
    return state.app.isLoading
}

function selectIsCorrectCollaborator(state: RootState){
    return state.app.isCorrectColaborator
}

export {
    selectRole,
    selectCourses,
    selectCurrentCourse,
    selectStudentsForCourse,
    selectTasksForCourse,
    selectUserData,
    selectIsLoading,
    selectIsCorrectCollaborator
};
