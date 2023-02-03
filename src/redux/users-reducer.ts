type initialStateType = {
    users: UsersInitialStateType[]
}
type UsersInitialStateType = { id: number, followed: boolean, fullName: string, status: string, location: LocationType }

type LocationType = {city: string, country: string}

const initialState:initialStateType  = {
    users: [
        // {id: 1, followed: true, fullName: 'Max', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Nika',
        //     status: 'I am a boss-wife',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     fullName: 'Sonya',
        //     status: 'I am a boss-child',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ]
}

type ActionUsersType = followACType | unFollowACType | setUsersACType

export const usersReducer = (state: initialStateType = initialState, action: ActionUsersType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
              ...state, users: state.users.map(el=>el.id===action.userId ? {...el, followed: true} :el)
            }
        }
        case "UNFOLLOW":{
            return {
                ...state, users: state.users.map(el=>el.id===action.userId ? {...el, followed: false} :el)
            }
        }
        case "SET-USERS":{
            return {...state, users:[...state.users, ...action.users]}
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
const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

type setUsersACType=ReturnType<typeof setUsersAC>
const setUsersAC = (users: UsersInitialStateType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}