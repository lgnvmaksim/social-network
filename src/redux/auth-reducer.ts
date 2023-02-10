export type InitialAuthStateType = {
    id: null |string,
    email: null| string,
    login: null| string,
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
                    isAuth: true
                }
            }
            default:
                return state
        }
    }

    type setUserDataType = ReturnType < typeof setAuthUserData >
    export const setAuthUserData = (id: string| null, email: string|null, login: string|null) => {
        return {
            type: 'SET-USER-DATA',id, email, login
        } as const
    }