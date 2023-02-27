import {
    ActionDialogsType,
    DialogType,
    MessageType,
    sendMessageAC,
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type DialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType={
    dialogs: DialogType[],
    messages: MessageType[]
    newMessageBody: string,

}
type mapDispatchToPropsType={
    onSendMessageClick:(value: string)=>void

}


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,

    }
}

const mapDispatchToProps = (dispatch: (action: ActionDialogsType) => void): mapDispatchToPropsType => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        },

    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))




















// export const DialogsContainer = (props: DialogsContainerType) => {
//     // const dispatch = useDispatch()
//
//     const onSendMessageClick = () => {
//         dispatch(sendMessageAC())
//     }
//
//     const onMessageChange = (e: string) => {
//         dispatch(updateNewMessageBodyAC(e))
//     }
//
//     return <Dialogs dialogs={props.dialogsPage.dialogs}
//                     messages={props.dialogsPage.messages}
//                     newMessageBody={props.dialogsPage.newMessageBody}
//                     onSendMessageClick={onSendMessageClick}
//                     onMessageChange={onMessageChange}/>
// };