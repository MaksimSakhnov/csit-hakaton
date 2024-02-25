import { configureStore } from "@reduxjs/toolkit"
import userReducer from './user/userSlice'
import appSlice from "./app/appSlice";
import adminSlice from "./admin/adminSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminSlice.reducer,
        app: appSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch