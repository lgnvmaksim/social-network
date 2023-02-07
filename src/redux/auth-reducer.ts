export type InitialAuthStateType = {
    data: DataAuthType,
    isAuth:boolean
}

export type DataAuthType ={
    data: DataInsideType
    resultCode: number,

}

export type DataInsideType={
    id: null | number | undefined,
    email: null | string |undefined,
    login: null | string

}

 const initialState: InitialAuthStateType = {
    data:{
        data: {
            id: null,
            email: null,
            login: null,
        },
        resultCode: 0
    },
     isAuth: false
}

type ActionType = setUserDataType

export const authReducer = (state = initialState, action: ActionType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {
               ...state, data: {...state.data, data: action.dataName}, isAuth: true
            }
        }
        default: return state
    }
}

type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData  = ({id, email, login}:DataInsideType) => {
    return {
        type: 'SET-USER-DATA', dataName: {id, email, login}
    } as const
}