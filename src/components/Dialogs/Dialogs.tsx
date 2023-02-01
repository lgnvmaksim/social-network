import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionType, DialogPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsType = DialogPageType & {
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsType) => {


    let dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messageElements = props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)
    let newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
    props.dispatch(sendMessageAC())
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <div><textarea
                            placeholder={'Enter your message'}
                            value={newMessageBody}
                            onChange={onMessageChange}></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};