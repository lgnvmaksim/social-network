export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar?: SidebarType


}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscriber: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostAC| UpdateNewTextAC) => void
}

type AddPostAC= {
    type: 'ADD-POST',
    postMessage:string
}

type UpdateNewTextAC= {
    type: 'UPDATE-NEW-TEXT',
    newText:string
}

export type ActionType= AddPostAC | UpdateNewTextAC

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '!',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ]
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state')
    },
    subscriber(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 5, message: action.postMessage, likesCount: 12}
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        }
    }
}




