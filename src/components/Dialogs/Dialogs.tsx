import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType} from "../../index";

export const Dialogs = (props: DialogsType) => {


    let dialogElements =  props.dialogsItem.map(el=><DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messageElements = props.messages.map(el=><Message message={el.message} id={el.id} key={el.id}/>)

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