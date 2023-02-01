import {ActionType, ProfilePageType} from "./state";



export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: 5, message: action.postMessage, likesCount: 12}
            return {
                ...state, posts: [...state.posts, newPost]
            }
        } case "UPDATE-NEW-TEXT":{
            return {...state, messageForNewPost:action.newText}
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