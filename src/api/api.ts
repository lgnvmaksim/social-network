import axios from "axios";
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

export type AuthLoginType ={
    resultCode: number
    messages: string[],
    data: {
        userId: number
    }
}

export type AuthGetType ={
    resultCode: number
    messages: string[],
    data: {
        id: number|null,
        email: string| null,
        login: string| null
    }
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
          return instance.put('profile/status/', {status})
    }
}

export const authApi={
    me () {
      return  instance.get<AuthGetType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe:boolean=false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete<AuthLoginType>(`auth/login`)
    },
}


