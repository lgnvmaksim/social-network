import React from 'react';
import {DialogType, MessageType} from "../../redux/store";
import {ActionDialogsType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

export type DialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType={
    dialogs: DialogType[],
    messages: MessageType[]
    newMessageBody: string
}
type mapDispatchToPropsType={
    onSendMessageClick:()=>void
    onMessageChange:(event: string)=>void
}


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: (action: ActionDialogsType) => void): mapDispatchToPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        onMessageChange: (e: string) => {
            dispatch(updateNewMessageBodyAC(e))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)




















// export const DialogsContainer = (props: DialogsContainerType) => {
//     // const dispatch = useDispatch()
//
//     const onSendMessageClick = () => {
//         dispatch(sendMessageAC())
//     }
//
//     const onMessageChange = (e: string) => {
//         dispatch(updateNewMessageBodyAC(e))
//     }
//
//     return <Dialogs dialogs={props.dialogsPage.dialogs}
//                     messages={props.dialogsPage.messages}
//                     newMessageBody={props.dialogsPage.newMessageBody}
//                     onSendMessageClick={onSendMessageClick}
//                     onMessageChange={onMessageChange}/>
// };