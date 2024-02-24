import { createSlice } from "@reduxjs/toolkit"
import {adminInitialState} from "./initialState.ts";



export const adminSlice = createSlice({
    name: 'admin',
    initialState: adminInitialState,
    reducers: {

    },
})


export default adminSlice.reducer