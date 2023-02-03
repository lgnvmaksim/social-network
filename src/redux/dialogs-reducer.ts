export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}


export type ActionDialogsType = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>


let initialState={
    dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
}


export const dialogsReducer = (state: DialogPageType=initialState, action: ActionDialogsType): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state, newMessageBody: action.body
            }
        }
        case "SEND-MESSAGE":{
            return {
                ...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: state.newMessageBody}]
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