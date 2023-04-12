import {userApi} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";
import {updateObjectInArray} from "../ulils/object-helpers";

export type initialUsersStateType = {
    items: UsersInitialStateType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    totalCount: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
export type UsersInitialStateType = {
    id: number, photos: PhotosType, followed: boolean, name: string, status: string | null,
    // location: LocationType,
    uniqueUrlName: string | null
}
type PhotosType = {
    small: string,
    large: string
}
// type LocationType = { city: string, country: string }

export const initialState: initialUsersStateType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    totalCount: 1,
    isFetching: true,
    followingInProgress: []

}

export type ActionUsersType =
    followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | setIsFetchingACType
    | toggleFollowingProgressType

export const usersReducer = (state: initialUsersStateType = initialState, action: ActionUsersType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, items: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET-USERS-TOTAL-COUNT": {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case "TOGGLE IS FETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS" : {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

type followACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}


type unFollowACType = ReturnType<typeof unFollowSuccess>
export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersInitialStateType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

type setUsersTotalCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        count: count
    } as const
}

type setIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE IS FETCHING",
        isFetching: isFetching
    } as const

}

type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId
    } as const
}

export const requestUsers = (currentPage: number, pageSize: number): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const data = await userApi.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): AppThunk => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, userApi.follow.bind(userApi), followSuccess)
    }
}

export const unFollow = (userId: number): AppThunk => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, userApi.unfollow.bind(userApi), unFollowSuccess)


    }
}