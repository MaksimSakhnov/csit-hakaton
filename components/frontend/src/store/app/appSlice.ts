import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {appInitialState} from "./initialState";
import {getCourses, getCurrentCourse, getStudentsForCourse} from "./requests";
import {appRole, IDetailCourse} from "./appSlice.type";
import {IStudent} from "../admin/adminSlice.type";
import {loginAdmin} from "../admin/requests";


const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setCourse: (state, action: PayloadAction<null | IDetailCourse>) => {
            state.currentCourse = action.payload
        },
        setStudents: (state, action: PayloadAction<null | IStudent[]>) => {
            state.studentsForCourse = action.payload
        },
        setRole: (state, action: PayloadAction<appRole>) => {
            state.role = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getCourses.fulfilled, (state, action) => {
            state.coursesData = action.payload;
        })
        builder.addCase(getCurrentCourse.fulfilled, (state, action)=>{
            state.currentCourse = action.payload
        })
        builder.addCase(getStudentsForCourse.fulfilled, (state, action)=>{
            state.studentsForCourse = action.payload;
        })

    }
})


export default appSlice;