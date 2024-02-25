import {createAsyncThunk} from "@reduxjs/toolkit";
import {teacherApi} from "../../api/teacherApi";




const getCourses = createAsyncThunk(
    'admin/getCourses',
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
    'admin/getCurrentCourse',
    async (courseId: number) => {
        const data = await teacherApi.getCurrentCourse(courseId)
        return data
    },
);


const getStudentsForCourse = createAsyncThunk(
    'admin/getStudentsForCourse',
    async (courseId: number) => {
        const data = await teacherApi.getStudentsForCourse(courseId)
        return data
    },
);




export {getCourses, getCurrentCourse, getStudentsForCourse}