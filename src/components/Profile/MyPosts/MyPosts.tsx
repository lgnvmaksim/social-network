import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
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
                  <button>+</button>
              </div>

            </div>
            <div className={s.posts}>
                <Post message = 'Hello' likeCount={10}/>
                <Post message = "It's my first post" likeCount={15}/>
            </div>

        </div>
    );
};
