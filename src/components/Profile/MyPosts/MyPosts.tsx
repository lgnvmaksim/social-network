import React, {memo} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostsContainerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../ulils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<MyPostsContainerType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'messageForNewPost'} validate={[required, maxLength10]} placeholder={'Hello Maxi'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>

    </form>;
}

export const AddMessageFromRedux = reduxForm<MyPostsContainerType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = memo((props: MyPostsContainerType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCount={el.likesCount}
                                                    key={el.id}/>)


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
}
)