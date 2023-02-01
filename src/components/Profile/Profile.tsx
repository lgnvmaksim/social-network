import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/state";

export type ProfileType={
    posts: PostType[],
    messageForNewPost: string
    dispatch: (action: ActionType)=>void
}




export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} messageForNewPost={props.messageForNewPost}  dispatch={props.dispatch} />
        </div>
    );
};
