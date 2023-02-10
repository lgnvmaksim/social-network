import axios from "axios";
import {initialUsersStateType} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b4d8e782-12a1-4cd0-86dd-a8ec637b9008'}
})

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<initialUsersStateType>(`users?page=${currentPage}&count=${pageSize}`).then(r => r.data)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }
}


