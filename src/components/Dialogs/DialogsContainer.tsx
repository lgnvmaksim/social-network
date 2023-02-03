import React from 'react';
import {DialogPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {useDispatch} from "react-redux";

type DialogsContainerType = {
    dialogsPage: DialogPageType
}

export const DialogsContainer = (props: DialogsContainerType) => {
    const dispatch = useDispatch()

    const onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }

    const onMessageChange = (e:string) => {
        dispatch(updateNewMessageBodyAC(e))
    }

    return <Dialogs dialogs={props.dialogsPage.dialogs}
                    messages={props.dialogsPage.messages}
                    newMessageBody={props.dialogsPage.newMessageBody}
                    onSendMessageClick={onSendMessageClick}
                    onMessageChange={onMessageChange}/>
};