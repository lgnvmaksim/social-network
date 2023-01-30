import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

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