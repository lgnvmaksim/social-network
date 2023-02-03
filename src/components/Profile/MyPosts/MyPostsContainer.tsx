import React, {ChangeEvent} from 'react';
import {addPostAC, updateNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ProfilePageType} from "../../../redux/store";
import {useDispatch} from "react-redux";

type MyPostsContainerType = {
    profilePage: ProfilePageType
}
export const MyPostsContainer = (props: MyPostsContainerType) => {
    const dispatch = useDispatch()


    const addPostCallback = (postMessage:string) => {
        dispatch(addPostAC(postMessage))
        dispatch(updateNewTextAC(''))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewTextAC(e.currentTarget.value))
    }


    return <MyPosts
        messageForNewPost={props.profilePage.messageForNewPost}
        posts={props.profilePage.posts}
        addPostCallback={addPostCallback}
        onPostChange={onPostChange}
    />
};
