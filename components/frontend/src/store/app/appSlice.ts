import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {appInitialState} from "./initialState";
import {getCourses, getCurrentCourse} from "./requests";
import {IDetailCourse} from "./appSlice.type";


export const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setCourse: (state, action: PayloadAction<null | IDetailCourse>) => {
            state.currentCourse = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCourses.fulfilled, (state, action) => {
            state.coursesData = action.payload;
        })
        builder.addCase(getCurrentCourse.fulfilled, (state, action)=>{
            state.currentCourse = action.payload
        })
    }
})


export default appSlice.reducer