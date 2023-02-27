import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../ulils/validators/validators";


export const Dialogs = (props: DialogsContainerType) => {
    let dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messageElements = props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)


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


let maxLength10 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<DialogsContainerType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const AddMessageFormRedux =  reduxForm<DialogsContainerType>({form: 'dialogs'})(AddMessageForm)