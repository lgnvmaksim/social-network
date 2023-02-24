import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsContainerType) => {
    let dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messageElements = props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)
    // let newMessageBody = props.newMessageBody

    //
    // const onSendMessageClick = () => {
    //     props.onSendMessageClick()
    // }

    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.onMessageChange(e.currentTarget.value)
    // }

    const addNewMessage = (values: DialogsContainerType) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};




const AddMessageForm: React.FC<InjectedFormProps<DialogsContainerType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const AddMessageFormRedux =  reduxForm<DialogsContainerType>({form: 'dialogs'})(AddMessageForm)