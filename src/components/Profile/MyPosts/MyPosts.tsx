import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePageType} from "../../../redux/state";





export const MyPosts = (props: ProfilePageType) => {


    let postsElements = props.posts.map(el=><Post message={el.message} likeCount={el.likesCount} key={el.id}/>)

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
