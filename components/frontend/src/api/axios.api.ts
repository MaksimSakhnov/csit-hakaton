import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const instance = axios.create({
    baseURL: 'http://188.225.42.31:3000/api',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
    },
})