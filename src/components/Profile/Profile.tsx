import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

export type ProfileType={
    posts: PostType[],
    messageForNewPost: string
    addPost: (postMessage: string) => void
    changeNewText:(newText: string)=>void
}




export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} messageForNewPost={props.messageForNewPost}  addPost={props.addPost}  changeNewText={props.changeNewText}/>
        </div>
    );
};
