export type initialUsersStateType = {
    items: UsersInitialStateType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    totalCount: number
}
export type UsersInitialStateType = {
    id: number, photos: PhotosType, followed: boolean, name: string, status: string | null,
    // location: LocationType,
    uniqueUrlName: string| null
}
type PhotosType = {
    small: string,
    large: string
}
type LocationType = { city: string, country: string }

export const initialState: initialUsersStateType = {
    items: [
        // {
        //     id: 1,
        //     photos: {
        //         small: '',
        //         large: ''
        //     },
        //     followed: true,
        //     name: 'Max',
        //     status: 'I am a boss',
        //     // location: {city: 'Minsk', country: 'Belarus'},
        //     uniqueUrlName: '',
        //
        // },
        // {
        //     id: 2,
        //     photos: {
        //         small: '',
        //         large: ''
        //     },
        //     followed: false,
        //     name: 'Nika',
        //     status: 'I am a boss-wife',
        //     // location: {city: 'Moscow', country: 'Russia'},
        //     uniqueUrlName: null,
        // },
        // {
        //     id: 3,
        //     photos: {
        //         small: '',
        //         large: ''
        //     },
        //     followed: false,
        //     name: 'Sonya',
        //     status: 'I am a boss-child',
        //     // location: {city: 'Kiev', country: 'Ukraine'},
        //     uniqueUrlName: null,
        // },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    totalCount: 1

}

export type ActionUsersType = followACType | unFollowACType | setUsersACType | setCurrentPageACType | setUsersTotalCountACType

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
        case "SET-CURRENT-PAGE":{
            return  {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET-USERS-TOTAL-COUNT":{
            return {
                ...state, totalUsersCount: action.count
            }
        }
        default:
            return state
    }
}

type followACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}

type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersInitialStateType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (count: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        count: count
    }as const
}

