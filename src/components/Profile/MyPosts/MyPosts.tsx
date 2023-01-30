import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

// type MyPostsPropsType={
//     id?:number
//     posts:string
//     likeCount: number
// }

export const MyPosts = () => {
    let postsData = [
        {id: 1, posts: 'Hello', likeCount: 10},
        {id: 2, posts: "It\'s my first post", likeCount: 12},
        {id: 3, posts: 'Best practise', likeCount: 15},
    ]

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
                <Post message = {postsData[0].posts} likeCount={postsData[0].likeCount}/>
                <Post message = {postsData[1].posts} likeCount={postsData[1].likeCount}/>
                <Post message = {postsData[2].posts} likeCount={postsData[2].likeCount}/>
            </div>

        </div>
    );
};
