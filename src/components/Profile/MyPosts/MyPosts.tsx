import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostsPropsType} from "../../../index";





export const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.myPosts.map(el=><Post message={el.message} likeCount={el.likeCount} key={el.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
              <div>
                  <button>Add post</button>
              </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};
