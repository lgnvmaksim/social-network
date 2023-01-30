import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

// type MyPostsPropsType={
//     id?:number
//     posts:string
//     likeCount: number
// }

export const MyPosts = () => {
    let posts = [
        {id: 1, posts: 'Hello', likeCount: 10},
        {id: 2, posts: "It\'s my first post", likeCount: 12},
        {id: 3, posts: 'Best practise', likeCount: 15},
    ]

    let postsElements = posts.map(el=><Post message={el.posts} likeCount={el.likeCount} key={el.id}/>)

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
