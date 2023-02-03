import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../../redux/redux-store";


type ProfileType = {
    profilePage: ProfilePageType
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage} />
        </div>
    );
};
