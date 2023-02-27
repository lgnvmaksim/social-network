import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

export type InitialAuthStateType = {
    id: number | null,
    email:  string| null,
    login:  string| null,
    isAuth: boolean

}

const initialState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type ActionAuthType = setUserDataType

export const authReducer = (state = initialState, action: ActionAuthType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        }
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number| null , email: string| null, login: string| null, isAuth:boolean) => {
    return {
        type: 'SET-USER-DATA', id, email, login, isAuth
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authApi.me().then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserData(id, email, login, true))

            }
        })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) =>async (dispatch:(action: FormAction | ReturnType<typeof getAuthUserData> )=>void) => {
authApi.login(email, password, rememberMe)
    .then((res)=>{
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            dispatch(stopSubmit('login', {_error: res.data.messages}))
        }
    })
}

export const logoutTC = ()=>(dispatch: Dispatch) => {
    authApi.logout()
        .then((res)=>{
            if (res.data.resultCode ===0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}