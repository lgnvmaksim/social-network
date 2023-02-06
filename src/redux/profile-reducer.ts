export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: ProfileType
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

type PhotosType={
    small: string,
    large: string
}

type ContactsType={
    facebook: null | string,
    github: null | string,
    mainLink: null | string,
    twitter: null | string,
    vk: null | string,
    website: null | string,
    youtube: null | string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ActionProfileType =
    ReturnType<typeof updateNewTextAC> | ReturnType<typeof addPostAC> | setUserProfileType


let initialState: ProfilePageType = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
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
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: 5, message: action.postMessage, likesCount: 12}
            return {
                ...state, posts: [...state.posts, newPost]
            }
        }
        case "UPDATE-NEW-TEXT": {
            return {...state, messageForNewPost: action.newText}
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


export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}
export const updateNewTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-TEXT",
        newText: newText
    } as const
}

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE", profile
    } as const
}