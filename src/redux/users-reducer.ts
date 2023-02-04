type initialStateType = {
    users: UsersInitialStateType[]
}
export type UsersInitialStateType = { id: number, photoUrl: string, followed: boolean, fullName: string, status: string, location: LocationType }

type LocationType = { city: string, country: string }

const initialState: initialStateType = {
    users: [
    //     {
    //         id: 1,
    //         photoUrl: 'https://cdn.dribbble.com/users/5982351/screenshots/14764310/media/2b5664cbfbd8b3f5447710760472228f.png?compress=1&resize=400x300&vertical=top',
    //         followed: true,
    //         fullName: 'Max',
    //         status: 'I am a boss',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: 'https://cdn.dribbble.com/users/5982351/screenshots/14764310/media/2b5664cbfbd8b3f5447710760472228f.png?compress=1&resize=400x300&vertical=top',
    //         followed: false,
    //         fullName: 'Nika',
    //         status: 'I am a boss-wife',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://cdn.dribbble.com/users/5982351/screenshots/14764310/media/2b5664cbfbd8b3f5447710760472228f.png?compress=1&resize=400x300&vertical=top',
    //         followed: false,
    //         fullName: 'Sonya',
    //         status: 'I am a boss-child',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    ]
}

export type ActionUsersType = followACType | unFollowACType | setUsersACType

export const usersReducer = (state: initialStateType = initialState, action: ActionUsersType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
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