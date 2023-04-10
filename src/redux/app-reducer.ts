import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";

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


export const initializeAppTC = (): AppThunk =>(dispatch) => {
  let promise =  dispatch(getAuthUserData())
    promise.then(()=>
    dispatch(initializedSuccessAC()))

}
