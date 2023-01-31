import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfileType} from "../Profile";


export const MyPosts = (props: ProfileType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/>)


    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
        props.addPost(postMessageRef.current ? postMessageRef.current.value : '')
        props.changeNewText('')

    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value);
    }


    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={postMessageRef} value={props.messageForNewPost}
                              onChange={newTextChangeHandler}></textarea>
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
