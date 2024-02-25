import {createAsyncThunk} from "@reduxjs/toolkit";
import {teacherApi} from "../../api/teacherApi";




const getCourses = createAsyncThunk(
    'app/getCourses',
    async () => {
        const data = await teacherApi.getCourses()
        return data.map(el => {
            return {
                ...el,
                // @ts-ignore
                teachers: el.teachers.map(t => t.id)
            }
        })
    },
);

const getCurrentCourse = createAsyncThunk(
    'app/getCurrentCourse',
    async (courseId: number) => {
        const data = await teacherApi.getCurrentCourse(courseId)
        return data
    },
);


const getStudentsForCourse = createAsyncThunk(
    'app/getStudentsForCourse',
    async (courseId: number) => {
        const data = await teacherApi.getStudentsForCourse(courseId)
        return data
    },
);


const getTasksForCourse = createAsyncThunk(
    'app/getTasksForCourse', async (courseId: number) => {
        const data = await teacherApi.getTasksForCourse(courseId);
        return data
    }
)



export {getCourses, getCurrentCourse, getStudentsForCourse, getTasksForCourse}