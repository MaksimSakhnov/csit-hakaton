import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {appInitialState} from "./initialState";
import {
    checkCollaborator,
    getCourses,
    getCurrentCourse,
    getStudentsForCourse,
    getTasksForCourse,
    login
} from "./requests";
import {appRole, IDetailCourse} from "./appSlice.type";
import {ILoginAdminResponse, IStudent} from "../admin/adminSlice.type";


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
        setUserData: (state, action: PayloadAction<ILoginAdminResponse | null>)=>{
            state.userData = action.payload
        }

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
        builder.addCase(getTasksForCourse.fulfilled, (state, action)=>{
            state.tasksForCourse = action.payload;
        })

        builder.addCase(login.fulfilled, (state, action)=>{
            state.role = action.payload.role as appRole;
            state.userData = action.payload.result

        })
        builder.addCase(checkCollaborator.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isCorrectColaborator = action.payload
        }).addCase(checkCollaborator.pending, (state)=>{
            state.isLoading = true
        }).addCase(checkCollaborator.rejected, (state)=>{
            state.isCorrectColaborator = false;
            state.isLoading = false;
        })

    }
})


export default appSlice;