import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {addPost, ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/>)


    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
     addPost(postMessageRef.current? postMessageRef.current.value : '')
       if (postMessageRef.current !==null){
           postMessageRef.current.value = ''
       }
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};
