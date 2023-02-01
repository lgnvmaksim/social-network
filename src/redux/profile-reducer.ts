import {ActionType, ProfilePageType} from "./store";

let initialState={
    messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType):ProfilePageType  => {
    switch (action.type) {
        case 'ADD-POST': {
            console.log(action)
            let newPost = {id: 5, message: action.postMessage, likesCount: 12}
            return {
                ...state, posts: [...state.posts, newPost]
            }
        } case "UPDATE-NEW-TEXT":{
            console.log(action)
            return {...state, messageForNewPost: action.newText}
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