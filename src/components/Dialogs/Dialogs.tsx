import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";


export const Dialogs = (props: DialogsContainerType) => {
    let dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messageElements = props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)

    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
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
                            value={props.newMessageBody}
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