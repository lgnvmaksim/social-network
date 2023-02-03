import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/store";


type MyPostsType = {
    posts: PostType[]
    messageForNewPost: string
    addPostCallback:(postMessage:string)=>void
    onPostChange:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}
export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
        props.addPostCallback(postMessageRef.current ? postMessageRef.current.value : '')

      }

      const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e)
      }


    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={postMessageRef} value={props.messageForNewPost}
                              onChange={onPostChange}></textarea>
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
