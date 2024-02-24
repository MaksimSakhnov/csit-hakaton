import { configureStore } from "@reduxjs/toolkit"
import userReducer from './user/userSlice'
import adminReducer from './admin/adminSlice'
import appReducer from './app/appSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        app: appReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch