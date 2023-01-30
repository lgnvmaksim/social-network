import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My post
            <div>
                <textarea></textarea>
                <button>+</button>
            </div>
            <Post message = 'Hello' likeCount={10}/>
            <Post message = "It's my first post" likeCount={15}/>
        </div>
    );
};
