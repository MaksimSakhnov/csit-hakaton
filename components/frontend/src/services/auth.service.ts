import { instance } from "../api/axios.api";
import { IResponseUser, IResponseUserData, IUser, IUserLoginData, IUserRegisterData } from "../types/userTypes";

export const AuthService = {
    async registration(
        userData: IUserRegisterData
    ): Promise<IResponseUserData | undefined> {
        const { data } = await instance.post<IResponseUserData>('auth/signup', userData)
        return data
    },
    async login(userData: IUserLoginData): Promise<IUser | undefined> {
        const { data } = await instance.post<IUser>('auth/login', userData)
        return data
    },
    async getProfile() {
        const { data } = await instance.get<IResponseUser>('auth/profile')
        if (data) return data
    },
}