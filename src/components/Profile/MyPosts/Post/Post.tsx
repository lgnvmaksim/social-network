import React from 'react';
import s from "./Post.module.css";

type PropsType={
    message:string
    likeCount:number
}

export const Post = (props:PropsType) => {
    return <div className={s.item}>
            <img src="https://stickershop.line-scdn.net/stickershop/v1/product/8141837/LINEStorePC/main.png"
                 alt="avatar"/>
        {props.message}
        <div>
            <span>like: {props.likeCount}</span>
        </div>
        </div>
};