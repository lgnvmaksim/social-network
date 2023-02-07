import axios from "axios";
import {initialUsersStateType} from "../redux/users-reducer";

export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get<initialUsersStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(r=>r.data)
}

