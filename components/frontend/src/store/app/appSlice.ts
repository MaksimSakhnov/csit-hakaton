import { createSlice } from "@reduxjs/toolkit"
import { appInitialState} from "./initialState";



export const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {

    },
})


export default appSlice.reducer