import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://188.225.42.31/api',
})