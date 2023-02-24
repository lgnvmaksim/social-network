import {v1} from "uuid";

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type MessageType = {
    id: string,
    message: string
}
export type DialogType = {
    id: string,
    name: string
}


export type ActionDialogsType = ReturnType<typeof sendMessageAC>


let initialState={
    dialogs: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Viktor'},
                {id: v1(), name: 'Valera'}
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-kamasutra?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'}
            ],
            newMessageBody: ''
}


export const dialogsReducer = (state: DialogPageType=initialState, action: ActionDialogsType): DialogPageType => {
    switch (action.type) {
        // case "UPDATE-NEW-MESSAGE-BODY": {
        //     return {
        //         ...state, newMessageBody: action.body
        //     }
        // }
        case "SEND-MESSAGE":{
            return {
                ...state, messages: [...state.messages, {id: v1(), message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}

// export const updateNewMessageBodyAC = (body: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         body: body
//     } as const
// }
export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',newMessageBody
    } as const
}