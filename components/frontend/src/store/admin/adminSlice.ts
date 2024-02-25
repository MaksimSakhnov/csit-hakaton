import { createSlice } from "@reduxjs/toolkit"
import {adminInitialState} from "./initialState";
import {createCourses, createStudent, createTeacher, getCourses, getStudents, getTeachers} from "./requests";



export const adminSlice = createSlice({
    name: 'admin',
    initialState: adminInitialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getTeachers.fulfilled, (state, action)=>{
            state.teachersData = action.payload
        })

        builder.addCase(createTeacher.fulfilled, (state, action)=>{
            state.teachersData = action.payload
        })

        builder.addCase(getStudents.fulfilled, (state, action)=>{
            state.studentsData = action.payload
        })

        builder.addCase(createStudent.fulfilled, (state, action)=>{
            state.studentsData = action.payload
        })

        builder.addCase(getCourses.fulfilled, (state, action)=>{
            state.coursesData = action.payload
        })

        builder.addCase(createCourses.fulfilled, (state, action)=>{
            state.coursesData = action.payload
        })
    }
})


export default adminSlice.reducer