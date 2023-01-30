import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Max'} id={'1'}/>
                <DialogItem name={'Veronika'} id={'2'}/>
                <DialogItem name={'Sofia'} id={'3'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'Who are you'}/>
                <Message message={'Have a good day'}/>
            </div>
        </div>
    );
};