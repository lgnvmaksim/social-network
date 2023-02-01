import {ActionType, DialogPageType} from "./state";




export const dialogsReducer = (state: DialogPageType, action: ActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state, newMessageBody: action.body
            }
        }
        case "SEND-MESSAGE":{
            let body = state.newMessageBody
            return {
                ...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}