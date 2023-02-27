import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostsContainerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const AddNewPostForm: React.FC<InjectedFormProps<MyPostsContainerType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'messageForNewPost'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>

    </form>;
}

export const AddMessageFromRedux = reduxForm<MyPostsContainerType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = (props: MyPostsContainerType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/>)


    const addPostCallback = (values: MyPostsContainerType) => {
        props.addPostCallback(values.messageForNewPost)

    }
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <AddMessageFromRedux onSubmit={addPostCallback}/>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};
