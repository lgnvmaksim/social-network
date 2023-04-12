import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileType, profileReducer} from "./profile-reducer";
import {ActionDialogsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ActionUsersType, usersReducer} from "./users-reducer";
import {ActionAuthType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {ActionAppType, appReducer} from "./app-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
        // other store enhancers if any
    )
);


export type AppRootStateType = ReturnType<typeof reducers>
// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, any>
// export type ActionsType=ActionAuthType| ActionDialogsType | ActionProfileType

type CommonActionType = ActionUsersType| ActionAppType| ActionAuthType |ActionDialogsType| ActionProfileType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, CommonActionType>


// @ts-ignore
window.store = store