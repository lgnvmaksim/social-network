import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

export type MainType={
    posts: PostType[]
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
}

export type MyPostsPropsType={
    myPosts: PostType[]
}

type PostType ={
    id:number,
    message:string,
    likeCount:number
}

export type DialogsType ={
    dialogsItem: DialogItemPropsType[]
    messages:MessagePropsType[]
}

export type MessagePropsType = {
    message: string
    id: number
}

export type DialogItemPropsType = {
    name: string
    id: number
}


let posts = [
    {id: 1, message: 'Hello', likeCount: 10},
    {id: 2, message: "It\'s my first post", likeCount: 12},
    {id: 3, message: 'Best practise', likeCount: 15},
]

let dialogs = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Veronika'},
    {id: 3, name: 'Sofia'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Who are you'},
    {id: 3, message: 'Have a good day'},
]



ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);