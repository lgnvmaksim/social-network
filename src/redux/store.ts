import {ActionProfileType} from "./profile-reducer";
import {ActionDialogsType} from "./dialogs-reducer";










// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogPageType
//     sidebar: SidebarType
// }



// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     subscriber: (callback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionProfileType | ActionDialogsType) => void
// }




// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             messageForNewPost: '',
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: "It's my first post", likesCount: 11},
//                 {id: 3, message: 'Blabla', likesCount: 11},
//                 {id: 4, message: 'Dada', likesCount: 11}
//             ]
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrew'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra?'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('state')
//     },
//     subscriber(callback) {
//         this._callSubscriber = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber()
//
//     }
// }




