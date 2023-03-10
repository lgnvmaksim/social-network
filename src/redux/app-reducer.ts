import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

export type InitialAuthStateType = {
    initialized: boolean

}

const initialState: InitialAuthStateType = {
    initialized: false,
}

export type ActionAppType = ReturnType<typeof initializedSuccessAC>

export const appReducer = (state = initialState, action: ActionAppType): InitialAuthStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {
                ...state,
             initialized: true
            }
        }
        default:
            return state
    }
}


export const initializedSuccessAC = () => ({type: 'INITIALIZED-SUCCESS'}as const)

export const initializeAppTC = () =>(dispatch: any) => {
  let promise =  dispatch(getAuthUserData())
    promise.then(()=>
    dispatch(initializedSuccessAC()))

}
