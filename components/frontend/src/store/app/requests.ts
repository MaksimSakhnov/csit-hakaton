import {createAsyncThunk} from "@reduxjs/toolkit";
import {teacherApi} from "../../api/teacherApi";
import {IUserLoginData} from "../../types/userTypes";




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
    async (data: {courseId: number, userId?: number, role?: string}) => {
        const result = await teacherApi.getCurrentCourse(data.courseId, data.userId, data.role)
        return result
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

const checkCollaborator = createAsyncThunk(
    'app/checkCollaborator', async (data: {userId: number, courseId: number}) => {
        const result = await teacherApi.checkColaborator(data.userId, data.courseId);
        return result
    }
)

const login = createAsyncThunk(
    'app/login', async (temp : {data: IUserLoginData, role: 'STUDENT' | 'TEACHER'
}) => {
        const result = await teacherApi.login(temp.data);
        if (result){
            localStorage.setItem('userData', JSON.stringify(result))
            localStorage.setItem('userRole', JSON.stringify(temp.role))
        }
        return {result: result, role: temp.role}
    }
)



export {getCourses, getCurrentCourse, getStudentsForCourse, getTasksForCourse, login, checkCollaborator}