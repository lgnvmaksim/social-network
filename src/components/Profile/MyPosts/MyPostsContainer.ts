import {ChangeEvent} from 'react';
import {ActionProfileType, addPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";

export type MyPostsContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType={
    messageForNewPost:string
    posts: PostType[]
}

type mapDispatchToPropsType={
    addPostCallback:(postMessage: string)=>void
    // onPostChange:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: (action: ActionProfileType) => void): mapDispatchToPropsType => {
    return {
        addPostCallback: (messageForNewPost: string) => {
            dispatch(addPostAC(messageForNewPost))
            // dispatch(updateNewTextAC(''))
        },
        // onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     dispatch(updateNewTextAC(e.currentTarget.value))
        // }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


