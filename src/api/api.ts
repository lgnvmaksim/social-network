import axios, {AxiosResponse} from "axios";
import {initialUsersStateType} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b4d8e782-12a1-4cd0-86dd-a8ec637b9008'}
})


export type AuthType ={
    email:string| null
    password: string| null
    rememberMe: boolean
}

export type ResponseType<T={}> ={
    resultCode: number
    messages: string[],
    data: T
}

export type AuthGetType ={
        id: number
        email: string
        login: string
}

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<initialUsersStateType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(r => r.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method')
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
      getProfile(userId: string) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId: string){
          return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string){
          return instance.put<{ status: string}, AxiosResponse<ResponseType>>('profile/status', {status})
    }
}

export const authApi={
    me () {
      return  instance.get<ResponseType<AuthGetType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe:boolean=false){
        return instance.post<AxiosResponse<ResponseType<{userId: number}>>>(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete<ResponseType>(`auth/login`)
    },
}


