import {Dispatch} from "redux";
import {profileApi, userApi} from "../api/api";
import {v1} from "uuid";
import {AppThunk} from "./redux-store";

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: ProfileType
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    userId: string,
    photos: PhotosType
}

type PhotosType = {
    small: string,
    large: string
}

type ContactsType = {
    facebook: null | string,
    github: null | string,
    mainLink: null | string,
    twitter: null | string,
    vk: null | string,
    website: null | string,
    youtube: null | string
}

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

export type ActionProfileType =
 ReturnType<typeof addPostAC> | setUserProfileType
    | ReturnType<typeof setStatusAC>


let initialState: ProfilePageType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
            mainLink: null,
            twitter: '',
            vk: '',
            website: null,
            youtube: null
        },
        fullName: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: '1'
    },
    status: 'Hello'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case 'SET-STATUS': {
            return {
                ...state, status: action.status
            }
        }
        case 'ADD-POST': {
            let newPost = {id: v1(), message: action.messageForNewPost, likesCount: 12}
            return {
                ...state, posts: [...state.posts, newPost]
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
}


export const addPostAC = (messageForNewPost: string) => {
    return {
        type: 'ADD-POST',
        messageForNewPost: messageForNewPost
    } as const
}
// export const updateNewTextAC = (newText: string) => {
//     return {
//         type: "UPDATE-NEW-TEXT",
//         newText: newText
//     } as const
// }

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE", profile
    } as const
}

export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionProfileType>) => {
        userApi.getProfile(userId)
            .then(r => {
                dispatch(setUserProfile(r.data))
            })
    }
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(res => dispatch(setStatusAC(res.data)))
}

export const updateStatusTC = (status: string):AppThunk => (dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode===0){
                dispatch(setStatusAC(status))
            }
        })
}

