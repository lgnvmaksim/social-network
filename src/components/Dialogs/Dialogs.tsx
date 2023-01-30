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
    let dialogs = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Veronika'},
        {id: 3, name: 'Sofia'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Who are you'},
        {id: 3, message: 'Have a good day'},
    ]

    let dialogElements =  dialogs.map(el=><DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messageElements = messages.map(el=><Message message={el.message} id={el.id} key={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};