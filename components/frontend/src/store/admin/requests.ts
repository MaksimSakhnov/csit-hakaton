import {createAsyncThunk} from "@reduxjs/toolkit";
import {AdminApi} from "../../api/adminApi";
import {ICreateCourse, ICreateStudent, ICreateTeacher, ILoginAdmin} from "./adminSlice.type";

const getTeachers = createAsyncThunk(
    'admin/getTeachers',
    async () => {
        return await AdminApi.getTeachers();
    },
);

const createTeacher = createAsyncThunk(
    'admin/createTeacher',
    async (data: ICreateTeacher) => {
        await AdminApi.postTeacher(data);
        return await AdminApi.getTeachers();
    },
);

const getStudents = createAsyncThunk(
    'admin/getStudents',
    async () => {
        return await AdminApi.getStudents();
    },
);

const createStudent = createAsyncThunk(
    'admin/createStudent',
    async (data: ICreateStudent) => {
        await AdminApi.postStudents(data);
        return await AdminApi.getStudents();
    },
);

const getCourses = createAsyncThunk(
    'admin/getCourses',
    async () => {
        const data = await AdminApi.getCources()
        return data.map(el => {
            return {
                ...el,
                // @ts-ignore
                teachers: el.teachers.map(t => t.id)
            }
        })
    },
);

const createCourses = createAsyncThunk(
    'admin/createCourses',
    async (data: ICreateCourse) => {
        await AdminApi.postCources(data);
        const newData = await AdminApi.getCources()
        return newData.map(el => {
            return {
                ...el,
                // @ts-ignore
                teachers: el.teachers.map(t => t.id)
            }
        })
    },
);

const loginAdmin = createAsyncThunk(
    'admin/loginAdmin',
    async (data: ILoginAdmin) => {
        const result = await AdminApi.login(data);

        return result;
    },
);


export {getTeachers, getStudents, getCourses, createTeacher, createCourses, createStudent, loginAdmin}