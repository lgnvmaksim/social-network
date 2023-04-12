import {AnyAction, Dispatch} from "redux";
import {authApi} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType, AppThunk} from "./redux-store";

export type InitialAuthStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
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
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA', id, email, login, isAuth
    } as const
}

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let res = await authApi.me()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(setAuthUserData(id, email, login, true))

    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const res = await authApi.login(email, password, rememberMe)
    if (res.data.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit('login', {_error: res.data.data.messages}))
    }
}

export const logoutTC = (): AppThunk =>async (dispatch) => {
    const res = await authApi.logout()
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        }