import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string
    id: number
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Veronika'},
        {id: 3, name: 'Sofia'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Who are you'},
        {id: 3, message: 'Have a good day'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[0].id}/>

            </div>
        </div>
    );
};