import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {addPost, changeNewText, ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/>)


    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
     addPost(postMessageRef.current? postMessageRef.current.value : '')
        changeNewText('')

    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={postMessageRef} value={props.messageForNewPost} onChange={newTextChangeHandler}></textarea>
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
