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

export type StoreType={
    _state: RootStateType
    _callSubscriber: ()=>void
    addPost:(postMessage: string)=>void
    changeNewText:(newText: string)=>void
    subscriber:(callback:()=>void)=>void
    getState:()=>RootStateType
}

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
    addPost(postMessage: string) {
        let newPost = {id: 5, message: postMessage, likesCount: 12}
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber()
    },
    changeNewText(newText: string) {
       this._state.profilePage.messageForNewPost = newText
        this._callSubscriber()
    },
    subscriber(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    }
}






// let rerenderTree = (state: RootStateType) => {
//     console.log('state')
// }
//
//
//
//
// export let state: RootStateType = {
//     profilePage: {
//         messageForNewPost: '',
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 12},
//             {id: 2, message: "It's my first post", likesCount: 11},
//             {id: 3, message: 'Blabla', likesCount: 11},
//             {id: 4, message: 'Dada', likesCount: 11}
//         ]
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrew'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'}
//         ]
//     },
//     sidebar: {}
// }
//
//
// export const addPost = (postMessage: string) => {
//     let newPost = {id: 5, message: postMessage, likesCount: 12}
//     state.profilePage.posts.push(newPost)
//     rerenderTree(state)
// }
//
// export const changeNewText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText
//     rerenderTree(state)
// }
//
// export const subscribe = (observer: any) => {
//     rerenderTree = observer
// }
//
//
